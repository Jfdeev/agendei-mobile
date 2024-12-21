import { FlatList, Text, View, Image } from "react-native";
import { s } from "./style";
import { doctorsServices } from "../../constants/data";
import Service from "../../components/service/service";
import icon from "../../constants/icon";


export default function Services() {
    return (
        <View style={s.container}>
            <View style={s.banner}>
                <Image source={icon.female} />
                <Text style={s.name}>Heber</Text>
                <Text style={s.specialty}>Cardiologista</Text>
            </View>


            <FlatList 
            data={doctorsServices} 
            keyExtractor={(serv) => serv.id_service.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Service 
                    description={item.description} 
                    price={item.price} 
                />
            }}
            />
        </View>
    )
}