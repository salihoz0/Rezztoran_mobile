import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,ToastAndroid
} from 'react-native';
import styles from './ReservationsScreensStyles';
import {Button} from 'react-native-paper';
import {useGetReserveById} from '../../api/reserve';
import {useDelete} from '../../api/reserve';
import {useSelector} from 'react-redux';
import ReservationUpdate from '../../components/ReservationUpdate/ReservationUpdate';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ReservationsScreen = () => {
  const {myDetails} = useSelector(state => state.authStore);
  const userId = myDetails.id;
  const {data, refetch, isLoading} = useGetReserveById(userId);
  const {mutate: reserveDelete} = useDelete();
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState();
  const [restaurantId, setResId] = useState();

  //-----------------sayfada değişiklik olfuğunda aşağı kaydırıp refresh etmek içi -----------------------//
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    refetch();
    setTimeout(() => {
      setRefreshing(false);
    }, 300);
  }, []);
  //---------------------------------------------------------------------------------------------//
  const deleteReserve = async id =>
    new Promise((resolve, reject) => {
      reserveDelete(id, {
        onSuccess: () => {
          ToastAndroid.show('Rezervasyon iptal edildi',ToastAndroid.SHORT)
          refetch();
        },
        onError: () => {
          ToastAndroid.show('Rezervasyon iptal edilemedi',ToastAndroid.SHORT)
        },
      });
    });

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: item.restaurant.restaurantImage}}
        />
        <View style={styles.info_container}>
          <Text style={styles.titleImage}>
            {item.restaurant.restaurantName}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{item.reservationDate}</Text>
            <Text>{item.reservationTime}</Text>
            <Text>{item.personCount} kişi</Text>
          </View>
          <Text>{item.note}</Text>
          <View style={styles.button_container}>
            <Button
              mode="contained"
              buttonColor="#474747"
              textColor={'#F8B95C'}
              compact={true}
              style={styles.content}
              onPress={() => (
                setVisible(true), setId(item.id), setResId(item.restaurant.id)
              )}>
              Düzenle
            </Button>
            {item.bookingStatus === 'PENDING' ? (
              <Button
                compact={true}
                mode="contained"
                buttonColor="#DD7272"
                textColor={'white'}
                style={styles.contentCancel}
                onPress={() => deleteReserve(item.id)}>
                İptal Et
              </Button>
            ) : (
              <Button
                compact={true}
                mode="contained"
                buttonColor="#DD7272"
                textColor={'white'}
                style={styles.contentCancel}>
                İptal Edildi
              </Button>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {visible ? (
        <SafeAreaView
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}>
            <Icon name="arrow-collapse-left" size={35} color="black" />
          </TouchableOpacity>
          <ReservationUpdate restaurantId={restaurantId} id={id} />
        </SafeAreaView>
      ) : (
        <View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 25,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Poppins-Medium',
                color: 'black',
              }}>
              Rezervasyonlarım
            </Text>
          </View>

          <FlatList
            style={{zIndex: 1}}
            contentContainerStyle={{paddingBottom: 100}}
            data={data?.content.sort((a, b) => b.id - a.id)} //ilk oluşturulan rezervasyon en altta kalsın diye ters çevirdim
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ReservationsScreen;
