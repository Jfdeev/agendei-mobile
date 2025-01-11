import { FlatList, Text, View, Image } from "react-native";
import { s } from "./style";
import { doctorsServices } from "../../constants/data";
import Service from "../../components/service/service";
import icon from "../../constants/icon";


export default function Services(props) {

    const id_doctor = props.route.params.id_doctor;
    const name = props.route.params.name;
    const specialty = props.route.params.specialty;
    const iconDoctor = props.route.params.icon;

    function ClickService(id_service){
        props.navigation.navigate("schedule", {
            id_doctor,
            id_service
        })
    }
    return (
        <View style={s.container}>
            <View style={s.banner}>
                <Image source={iconDoctor == "M" ? icon.male : icon.female} />
                <Text style={s.name}>{name}</Text>
                <Text style={s.specialty}>{specialty}</Text>
            </View>


            <FlatList 
            data={doctorsServices} 
            keyExtractor={(serv) => serv.id_service.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return <Service 
                    id_service={item.id_service}
                    description={item.description} 
                    price={item.price} 
                    onPress={ClickService}
                />
            }}
            />
        </View>
    )
}