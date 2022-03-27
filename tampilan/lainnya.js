import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";

const BuatTiket = ({})=> {
  return(
    <SafeAreaView style={styles.background}>
      <View style={styles.box}>
        <Text style={styles.Text}>
          YuKapal
        </Text>

        <Text style={styles.Text2}>
          Kuota tersedia (10000)
        </Text>
        <Text style={styles.Text2}>
          Rincian Tiket
        </Text>

        <View style={styles.box2}>
          <Text style={styles.Text3} > 
            Bakauheni   <Icon name={'arrow-forward'}  size={20} color={'black'} />   Merak
          </Text>

          <Text style={styles.Text2}>
            Jadwal Masuk Pelabuhan :
          </Text>

          <Text style={styles.text4}>
            Kamis, 17 Maret 2022 
          </Text>

          <Text style={styles.text4}>
            15:30 WIB
          </Text>

          <Text style={styles.Text2}>
            Layanan :
          </Text>

          <Text style={styles.text4}>
            Express 
          </Text>

          <Text style={styles.text4}>
            ______________________________________
          </Text>

          <Text style={styles.text4}>
            Dewasa x 1                        Rp.65.000
          </Text>
        </View>

        <Text style ={styles.Text2}>
          Total                                         Rp.65.000
        </Text>

        <View style={styles.tombol}>
          <TouchableOpacity style={styles.warnatombol}>
            <Text style= {styles.tulisan}>
              Kembali
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.warnatombol2}>
          <Text style= {styles.tulisan2}>
              Lanjutkan
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background : {
    backgroundColor: "#c6ffb3",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :300,
    alignItems : "center",
    backgroundColor :"white",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  Text : {
    color: "#ffad33",
    marginTop:"70",
    fontWeight :"bold",
    fontSize : 40,
    marginBottom : 50,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  Text2 :{
    alignSelf :'flex-start',
    marginBottom : 8,
    fontWeight :'bold',
    fontSize :12,
  },
  Text3 :{
    fontSize : 17,
    fontWeight : "bold",
    marginBottom : 10,
    alignSelf :'flex-start',
  },
  box2 :{
    marginTop :20,
    width :250,
    alignItems : "center",
    backgroundColor :"#f0f0f0",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    borderWidth: 1,
  },
  text4 :{
    alignSelf :'flex-start',
    fontSize :12,
  },
  tombol:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 35,
    width: 270,
  },
  warnatombol :{
    backgroundColor :'white',
    borderWidth : 2,
    borderColor : '#ffad33',
    width : 125,
    borderRadius :5,
  },
  warnatombol2 :{
    backgroundColor :'#ffad33',
    borderWidth : 2,
    borderColor : '#ffad33',
    width : 125,
    borderRadius : 5,
  },
  tulisan:{
    fontWeight :'bold',
    color :'#ffad33',
    alignSelf : 'center',
    padding : 5,
  },
  tulisan2:{
    fontWeight :'bold',
    color :'white',
    alignSelf : 'center',
    padding :5,
  },
})

export default BuatTiket;