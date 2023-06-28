import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [passwordShown, setPasswordShown] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardShown(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardShown(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const togglePasswordShown = () => {
    setPasswordShown(!passwordShown);
  };

  const handlePress = () => {
    console.log({ username, email, password });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/photoBG.jpg")}
        style={styles.bgi}
      />
      <View
        style={{ ...styles.wrapper, paddingBottom: keyboardShown ? 323 : 78 }}
      >
        <View style={styles.avatar}>
          <AntDesign
            style={styles.addIcon}
            size={25}
            color="black"
            name="pluscircleo"
          />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={"Логін"}
            value={username}
            placeholderTextColor="#BDBDBD"
            onChangeText={(text) => setUsername(text)}
            autoCapitalize={"none"}
          />
          <TextInput
            style={styles.input}
            value={email}
            placeholder={"Адреса електронної пошти"}
            placeholderTextColor="#BDBDBD"
            onChangeText={(text) => setEmail(text)}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.inputLastChild]}
              placeholder={"Пароль"}
              value={password}
              placeholderTextColor="#BDBDBD"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={passwordShown}
              keyboardType="default"
            />
            <Text style={styles.passwordShown} onPress={togglePasswordShown}>
              {passwordShown ? "Показати" : "Сховати"}
            </Text>
          </View>
        </View>

        {!keyboardShown && (
          <>
            <Pressable style={styles.regButton}>
              <Text style={styles.regDisc} onPress={handlePress}>
                Зареєстуватися
              </Text>
            </Pressable>
            <Pressable>
              <Text style={styles.logInLinkDisc}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
  },
  bgi: {
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  avatar: {
    marginTop: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 32,
  },
  addIcon: {
    position: "absolute",
    right: -12.5,
    bottom: 14,
    width: 25,
    height: 25,
    color: "#FF6C00",
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 30,
    color: "#212121",
    marginBottom: 32,
  },
  inputContainer: { marginBottom: 43, width: "100%" },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  inputLastChild: {
    marginBottom: 0,
  },
  passwordContainer: { position: "relative" },
  passwordShown: {
    position: "absolute",
    top: 16,
    right: 16,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  regButton: {
    width: "100%",
    alignItems: "center",
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  regDisc: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  logInLinkDisc: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
