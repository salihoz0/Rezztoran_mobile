// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const RestaurantMenu = (props) => {
//     const { data } = props;

//     const categories = [
//         { name: 'Çorba', filterTerm: 'corba' },
//         { name: 'Ara Öğün', filterTerm: 'ara' },
//         { name: 'Ana Yemek', filterTerm: 'ana' },
//         { name: 'Salata', filterTerm: 'salata' },
//         { name: 'Tatlı', filterTerm: 'tatli' },
//     ];

//     const flatListData = categories.map((category) => {
//         return {
//             title: category.name,
//             data: data.filter((item) =>
//                 item.category_name.toLowerCase().includes(category.filterTerm)
//             ),
//         };
//     });

//     const RenderItem = ({ item }) => {
//         const [isExpanded, setIsExpanded] = useState(false);

//         const toggleAccordion = () => {
//             setIsExpanded(!isExpanded);
//         };

//         return (
//             <View
//                 style={{
//                     width: '100%', alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#D3D3D3', borderRadius: 5
//                 }}
//             >
//                 <TouchableOpacity
//                     style={{
//                         paddingVertical: 5,
//                         borderColor: '#F3F3F3',
//                         alignItems: 'center',
//                         flexDirection: 'row',
//                         width: '30%',
//                         justifyContent: 'space-between'
//                     }}
//                     onPress={toggleAccordion}
//                 >
//                     <Text
//                         style={{
//                             fontFamily: 'Poppins-Medium',
//                             fontSize: 10,
//                             letterSpacing: 0.2,
//                             color: '#000',
//                             fontSize: 15,
//                         }}>
//                         {item.title}
//                     </Text>
//                     <Icon
//                         name={
//                             isExpanded
//                                 ? 'arrow-down'
//                                 : 'arrow-right'}
//                         size={15}
//                         color='rgb(212, 123, 51)'
//                     />
//                 </TouchableOpacity>
//                 {
//                     isExpanded && item.data.map((menu) => (
//                         <Text style={{ color: 'rgb(212, 123, 51)', fontFamily: 'Poppins-Medium', fontSize: 10 }} key={menu.id}>{menu.name}</Text>
//                     ))
//                 }
//             </View >
//         );
//     };

//     return (
//         <View
//             style={{
//                 marginTop: 10,
//                 backgroundColor: 'rgb(240, 238, 230)',
//                 borderColor: 'rgb(217, 213, 169)',
//                 marginHorizontal: 10,
//                 alignItems: 'center',
//                 borderRadius: 5,
//                 borderWidth: 1,
//             }}
//         >
//             <Text
//                 style={{
//                     borderBottomWidth: 1,
//                     borderColor: 'rgb(237, 176, 7)',
//                     width: '100%',
//                     textAlign: 'center',
//                     paddingVertical: 10,
//                     borderTopLeftRadius: 10,
//                     borderTopRightRadius: 10,
//                     fontSize: 15,
//                     color: 'rgb(212, 123, 51)',
//                     fontFamily: 'Inter-Bold',
//                     marginBottom: 5
//                 }}
//             >Menü
//             </Text>
//             {
//                 flatListData.map((item) => <RenderItem item={item} />)
//             }
//         </View>
//     );
// };

// export default RestaurantMenu

/*

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
*/

import {View, Text} from 'react-native';
import React from 'react';

const Menu = ({restaurantAttributes}) => {
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: 'rgb(240, 238, 230)',
        borderColor: 'rgb(217, 213, 169)',
        borderWidth: 1,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        borderRadius: 5,
      }}>
      <Text
        style={{
          fontSize: 24,
          color: '#000000',
          alignItems: 'center',
        }}>
        Var olan seçenekler
      </Text>
      {Object.entries(restaurantAttributes).map(([item, availability]) => {
        if (availability === 'Var') {
          return <Text key={item}>{item}</Text>;
        } else {
          return null;
        }
      })}
    </View>
  );
};

export default Menu;
