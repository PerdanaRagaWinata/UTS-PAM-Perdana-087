import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as Data from "../../data.json"; 



// Mengurutkan Data kontak
const database = Data.data.sort((i, j) => {
  let firstCase = i.nama.toLowerCase();
  let secondCase = j.nama.toLowerCase();
  if (firstCase < secondCase) {
    return -1;
  } else if (firstCase > secondCase) {
    return 1;
  } else {
    return 0;
  }
});
export default function Homescreen({ navigation }) {
  const [text, settext] = useState("");
  const [DATA, setDATA] = useState(database);

  // Fungsi Pencarian kontak
  const cari = () => {
    let data = database;

    data = data.filter((item) =>
      item.nama.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
    setDATA(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>RaContact</Text>
      </View>

      <TextInput
        style={styles.cari
      }
        value={text}
        onChangeText={(text) => 
        {
          settext(text);
        }
      }
        onKeyPress={() => {
          cari();
        }
      }
        placeholder={"Cari........  "}
      />



      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.boxList}
              onPress={() => {
                navigation.navigate("Detail kontak", { item });
              }}
            >
              <View
                style={[styles.tampilanHuruf, { backgroundColor: item.warna }]}
              >
                <Text style={styles.hurufStyle}>
                  {item.nama[0].toUpperCase()}
                </Text>
              </View>
              <Text style={{ fontSize: 15 }}> {item.nama} </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.nama}
      />


      <TouchableOpacity
        style={styles.buttonPlus}
        onPress={() => {
          navigation.navigate("Tambahkan kontak");
        }}
      >
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>

      <StatusBar backgroundColor="#FFF" barStyle="light-content" />
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
  cari: {
    backgroundColor: "#d3d3d3",
    marginHorizontal: 18,
    marginVertical: 15,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  boxList: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    marginHorizontal: 15,
    marginVertical: 6,
    paddingLeft: 20,
  },
  tampilanHuruf: {
    fontSize: 18,
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  hurufStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  buttonPlus: {
    position: "absolute",
    top: 650,
    left: 260,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "#4db8ff",
  },
});
