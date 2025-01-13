import { View, Text } from "react-native";
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { ptBR } from "../../constants/calendarNames";
import { s } from "./style";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import  Button  from "../../components/button";


LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';


export default function Schedule(props) {
    
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedHour, setSelectedHour] = useState("");

    const id_doctor = props.route.params.id_doctor;
    const id_service = props.route.params.id_service;
    

    function ClickBooking(){
        console.log(id_doctor, id_service, selectedDate, selectedHour)
    }

    return <View style={s.container}>
        <View>
            <Calendar onDayPress={(day) => {
                setSelectedDate(day.dateString)
            }}
            markedDates={{
                [selectedDate]: {selected: true}
            }}
            minDate={new Date().toDateString()}
            />

            <View>
                    <Text style={s.textHour}>Selecione o horário</Text>
                </View>

            <View>
                <Picker 
                selectedValue={selectedHour} 
                onValueChange={(itemValue, itemIndex) => 
                    setSelectedHour(itemValue)}>
                    <Picker.Item label="08:00" value="08:00" />
                    <Picker.Item label="08:30" value="08:30" />
                    <Picker.Item label="09:00" value="09:00" />
                </Picker>
            </View>
        </View>

        
            <View style={s.containerButton}>
                <Button text="Confirmar Reserva"  onPress={ClickBooking}/>
            </View>
    </View>
}