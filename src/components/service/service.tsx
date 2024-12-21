import { Text, View } from "react-native";
import { s } from "./style";
import  Button from "../button/index";


export default function Service(props) {
    return <View style={s.service}>
        <View style={s.containerText}>
            <Text style={s.description}>{props.description}</Text>
            <Text style={s.price}>
                {
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }
                    ).format(props.price)
                }
                </Text>
        </View>

        <View style={s.containerButton}>
            <Button text="Agendar" />
        </View>
    </View>
}