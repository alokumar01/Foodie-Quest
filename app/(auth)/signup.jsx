import React from "react";
import { useRouter } from "expo-router";
import {
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import entryImage from "../../assets/images/Frame.png";
import { Formik } from "formik";

const handleChange = () => {};

const Signup = () => {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#2b2b2b]`}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <Text className="text-center text-lg text-white font-bold">
            Lets get started
          </Text>
        </View>

        {/* input fields email and passwords  */}
        <View className="w-5/6">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={""}
            onSubmit={handleChange}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <Text>Email</Text>
                <TextInput
                  className="h-15 border border-white text-white rounded px-2"
                  keyboardType="email-address"
                  onChangeText={handleChange("email")}
                  value={values.email}
                  onBlur={handleBlur("email")}
                />
                {touched.email && errors.email && (
                  <Text className="text-red-500 text-xs mb-2">
                    {errors.email}
                  </Text>
                )}
                {/* password wala */}
                <Text>Password</Text>
                <TextInput
                  className="h-15 border border-white text-white rounded px-2"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  value={values.password}
                  onBlur={handleBlur("password")}
                />
                {touched.password && errors.password && (
                  <Text className="text-red-500 text-xs mb-2">
                    {errors.password}
                  </Text>
                )}
              </View>
            )}
          </Formik>
        </View>

        <View className="flex-1">
          <Image
            source={entryImage}
            className="w-full h-full "
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          className="p-2 my-2 bg-[#f49b33] text-black rounded-lg"
        >
          <Text className="text-lg font-semibold text-center"> Sign Up</Text>
        </TouchableOpacity>

        <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
