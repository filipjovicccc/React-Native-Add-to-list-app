import React from 'react'
import {
    StyleSheet, 
     Button,
    TextInput,Modal, View, Image } from 'react-native'

    import { useState } from 'react'

    function GoalInput(props) {
    
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText){
      
        setEnteredGoalText(enteredText)
        
      }

      function addGoalHandler(){
        
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
      }
    
  return (
    <Modal visible={props.visible} animationType="slide" style={styles.inputContainer}>
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
          <TextInput value={enteredGoalText} style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <View style={styles.buttonContainer}>
           <View style={styles.button}>
             <Button onPress={props.onEndGoal}  title='Cancel' color='#f31282'/>
            </View>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc'/>
            </View>
         </View>
       </View>
     </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
       },
       image:{
          width: 100,
          height: 100,
          margin: 20
       },
      
       textInput: {
          borderWidth: 1,
          borderColor: '#e4d0ff',
          backgroundColor: 'e4d0ff',
          color: '#120438',
          borderRadius: 6,
          width: '100%',
          padding: 16
    
       },

       buttonContainer: {
        flexDirection: 'row'

       },

       button:{
        width: '30%',
        marginHorizontal: 8

       }
   

}

)