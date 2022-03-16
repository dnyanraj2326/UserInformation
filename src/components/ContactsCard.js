import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getUser} from '../Redux/users/action';
import {useNavigation} from '@react-navigation/native';

const ContactsCard = ({users, fetchUser}) => {
  const navigation = useNavigation();

  useEffect(() => {
    fetchUser;
  }, []);

  // const dispatch = useDispatch();
  // const FetchUser = () => {
  //   dispatch(getUser());
  // };
  // const users = useSelector((state) => ({...state.user}));
  // console.log(`There user are: ${users}`)
  return (
    <View>
      {/* <TouchableOpacity onPress={FetchUser} style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:17,fontWeight:'bold',color:'#fff'}}>Buttton</Text>
      </TouchableOpacity> */}
      {users.users.map((item, ind) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.push('UserDetails', {
                name: item.name,
                email: item.email,
                phone: item.phone,
                username: item.username,
                website: item.website,
              })
            }
            key={ind}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.4,
              borderBottomColor: '#4A5665',
              paddingVertical: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }}
                style={{width: 60, height: 60, borderRadius: 20}}
              />
              <View style={{paddingLeft: 20}}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    paddingBottom: 4,
                    fontSize: 16,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{color: '#EEEEEE', fontWeight: '600', fontSize: 12}}>
                  {item.email}
                </Text>
              </View>
            </View>
            <View>
              <Text style={{color: '#4A5665', fontWeight: 'bold'}}>10.45</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    users: state.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsCard);
