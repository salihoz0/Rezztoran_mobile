import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '../CheckBox';
import { sortMenu, filterMenu, numOfPeopleMenu } from './sort-filter';
import { useDispatch, useSelector } from 'react-redux';
import { setSort, setFilter, setNumOfPeople, setReservationDate, resetSearchEngineStore } from '../../store/searchEngineStore'
import Calendar from '../Calendar'

const initialState = {
  sortSelected: false,
  filterSelected: false,
  NumOfPeople: false,
  date: false,
};

function accordionReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_SORT':
      return { ...state, sortSelected: !state.sortSelected };
    case 'TOGGLE_FILTER':
      return { ...state, filterSelected: !state.filterSelected };
    case 'TOGGLE_NUM_OF_PEOPLE':
      return { ...state, NumOfPeople: !state.NumOfPeople };
    case 'TOGGLE_DATE':
      return { ...state, date: !state.date };
    default:
      return state;
  }
}

const SortMenu = props => {
  const { goBack } = props
  const { sortData, filterData, numOfPeople, reservationDate } = useSelector((state) => state.searchEngineStore)
  const [accordionState, dispatchAccordionAction] = useReducer(accordionReducer, initialState);
  const dispatch = useDispatch()

  console.log('date: ', reservationDate)

  const handleSortChange = (key) => {
    dispatch(
      setSort({
        sortData: key
      })
    )
  }

  const handleFilterChange = (key) => {
    dispatch(
      setFilter({
        filterData: key
      })
    )
  }

  const handleNumOfPeopleChange = (key) => {
    dispatch(
      setNumOfPeople({
        numOfPeople: key
      })
    )
  }

  const handleReservationDate = (date) => {
    dispatch(
      setReservationDate({
        reservationDate: date
      })
    )
  }

  const MenuButton = ({ onPress, iconCondition, title }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            paddingVertical: 16,
            paddingHorizontal: 24,
            borderBottomWidth: 1,
            borderColor: '#F3F3F3',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              lineHeight: 20,
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              letterSpacing: 0.2,
              color: '#000',
            }}>
            {title}
          </Text>
          <Icon
            style={{
              position: 'absolute',
              right: 24,
            }}
            name={
              iconCondition
                ? 'arrow-down'
                : 'arrow-right'}
            size={20}
            color='rgb(212, 123, 51)'
          />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 25, alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Medium', color: 'black' }}>Filtrele</Text>
        <View style={{ flexDirection: 'row', width: 100, alignItems: 'center', justifyContent: 'space-evenly' }}>
          <TouchableOpacity onPress={goBack}>
            <Icon name="backspace" size={25} style={{ color: 'rgb(212, 123, 51)' }} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 60 }}>
        <MenuButton onPress={() => dispatchAccordionAction({ type: 'TOGGLE_SORT' })} iconCondition={accordionState.sortSelected} title='Sırala' />
        {
          accordionState.sortSelected && (
            <View style={{ justifyContent: 'space-around', marginLeft: 24, marginBottom: 10 }}>
              {
                sortMenu.map((item) => {
                  return (
                    <CheckBox
                      key={item.key}
                      theme="ORANGE"
                      onToggle={() => handleSortChange(item.key)}
                      selected={sortData === item.key}
                      text={item.text} />
                  )
                })
              }
            </View>
          )
        }
        <MenuButton onPress={() => dispatchAccordionAction({ type: 'TOGGLE_FILTER' })} iconCondition={accordionState.filterSelected} title='Filtrele' />
        {
          accordionState.filterSelected && (
            <View style={{ justifyContent: 'space-around', marginLeft: 24, marginBottom: 10 }}>
              {
                filterMenu.map((item) => {
                  return (
                    <CheckBox
                      key={item.key}
                      theme="ORANGE"
                      onToggle={() => handleFilterChange(item.key)}
                      selected={filterData === item.key}
                      text={item.text} />
                  )
                })
              }
            </View>
          )
        }

        <MenuButton onPress={() => dispatchAccordionAction({ type: 'TOGGLE_NUM_OF_PEOPLE' })} iconCondition={accordionState.NumOfPeople} title='Kişi Sayısı' />
        {
          accordionState.NumOfPeople && (
            <View style={{ justifyContent: 'space-around', marginHorizontal: 10, marginBottom: 10 }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={numOfPeopleMenu}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity onPress={() => handleNumOfPeopleChange(item.key)} style={{ marginLeft: 10, borderWidth: 1, borderColor: '#0cc45c', borderRadius: 10, alignItems: 'center', paddingHorizontal: 10, marginTop: 10, paddingBottom: 10, backgroundColor: 'rgb(211, 244, 216)' }}>
                      <CheckBox
                        key={item.key}
                        theme="ORANGE"
                        onToggle={() => handleNumOfPeopleChange(item.key)}
                        selected={numOfPeople === item.key}
                        text={item.text} />
                    </TouchableOpacity>
                  )
                }}
              />
            </View>
          )
        }

        <MenuButton onPress={() => dispatchAccordionAction({ type: 'TOGGLE_DATE' })} iconCondition={accordionState.date} title='Tarih' />
        {
          accordionState.date && (
            <Calendar handleReservationDate={handleReservationDate} reservationDate={reservationDate} />
          )
        }

      </ScrollView>
    </SafeAreaView >
  );
};


export default SortMenu;
