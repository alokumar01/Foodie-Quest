import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 bg-cyan-400 items-center justify-center">
      <Text className="text-white text-2xl font-bold">🍽️ Welcome to Food Find!</Text>
      <Text className="text-red-500 mt-3 text-lg">Built by Alok Kumar</Text>
    </View>
  );
}
