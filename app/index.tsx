import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {

const[counter, setCounter]=useState(0);


function add(){
  setCounter(counter +1);

 {



  if (counter > 10) {
    setCounter(0);
  }


}

}
 function minus(){
  setCounter(counter -1);

  if (counter ==0){
    setCounter(0);
  }
 }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

<Text style={{fontSize: 40}}>{counter}</Text>

  <Button 
        onPress={ add}
        title="Plus"
        color={"green"}
      
  
      />

<Button 
        onPress={ minus}
        title="Minus"
      />

 <View style={{flex:1 }}>

 </View>
 {counter > 0 &&
<Button 
        onPress={ ()=> {setCounter(0);}}
        title="RESET"
      />
 }
    </View>
  );
}

