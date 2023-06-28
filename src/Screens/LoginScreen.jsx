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

export const LoginScreen = () => {
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
    console.log({ email, password });
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/photoBG.jpg")}
        style={styles.bgi}
      />
      <View
        style={{ ...styles.wrapper, paddingBottom: keyboardShown ? 323 : 145 }}
      >
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.inputContainer}>
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
                Увійти
              </Text>
            </Pressable>
            <Pressable>
              <Text style={styles.logInLinkDisc}>
                Немає акаунту? Зареєструватися
              </Text>
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
    paddingTop: 32,
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
