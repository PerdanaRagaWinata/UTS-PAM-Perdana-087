import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import { FontAwesome5 } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  
  export default function Screen_tambah({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ position: "absolute", left: 20 }}
            onPress={() => navigation.navigate("Home RaContact")}
          >
            <AntDesign name="arrowleft" size={26} color="black" />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Tambahkan Kontak</Text>
        </View>
  
        <View style={styles.box}>
          <View style={styles.garisIcon}>
            <FontAwesome5 name="user-alt" size={50} color="white" />
  
            <TouchableOpacity style={styles.cameraStyle}>
              <Ionicons name="md-camera" size={24} color="#454545" />
            </TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.containerInfo}>
          <View style={styles.boxInfo}>
            <Text style={styles.textInfoBold}>Nama</Text>
            <TextInput style={styles.textInfoBiasa} placeholder="Masukkan Nama" />
          </View>
  
          <View style={styles.boxInfo}>
            <Text style={styles.textInfoBold}>Nomor</Text>
            <TextInput
              style={styles.textInfoBiasa}
              placeholder="Masukkan Nomor"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.boxInfo}>
            <Text style={styles.textInfoBold}>EMAIL</Text>
            <TextInput
              style={styles.textInfoBiasa}
              placeholder="Masukkan Email"
              keyboardType="numeric"
            />
          </View>

          




  
          <View style={styles.boxInfo}>
            <Text style={styles.textInfoBold}>Info</Text>
            <TextInput style={styles.textInfoBiasa} placeholder="Masukkan Info" />
          </View>
        </View>
  
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Tambah</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 32,
      backgroundColor: "white",
    },
    header: {
      padding: 30,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#4db8ff",
    },
    textHeader: {
      fontSize: 20,
      fontWeight: "bold",
      letterSpacing: 1.5,
      color: "#FFFFFF",
    },
    box: {
      alignItems: "center",
      marginHorizontal: 20,
      marginVertical: 20,
    },
    garisIcon: {
      borderWidth: 1,
      padding: 30,
      borderRadius: 80,
      backgroundColor: "#454545",
    },
    cameraStyle: {
      position: "absolute",
      backgroundColor: "#00AA13",
      padding: 8,
      borderRadius: 20,
      top: 70,
      left: 75,
    },
    containerInfo: {
      marginTop: 20,
      marginHorizontal: 20,
    },
    textInfoBold: {
      fontWeight: "bold",
      fontSize: 16,
      backgroundColor: "#Ececec",
      paddingHorizontal: 10,
      paddingVertical: 7,
    },
    textInfoBiasa: {
      backgroundColor: "#F5F5F5",
      fontSize: 14,
      paddingLeft: 30,
      paddingVertical: 8,
    },
    boxInfo: {
      marginVertical: 10,
    },
    button: {
      alignItems: "center",
      padding: 15,
      paddingVertical: 10,
      marginHorizontal: 20,
      marginVertical: 8,
      backgroundColor: "#87CEFA",
    },
    textButton: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#454545",
    },
  });
  