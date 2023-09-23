import React from 'react'
import {
    StyleSheet, 
    View,
    Button,
    TextInput, } from 'react-native'

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
    <Modal visable={props.visable} animationType="slide" style={styles.inputContainer}>
          <TextInput value={enteredGoalText} style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
          <Button title="Add Goal" onPress={addGoalHandler}/>
     </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
       },
      
       textInput: {
    
          borderWidth: 1,
          borderColor: '#cccccc',
          width: '70%',
          marginRight: 5,
          padding: 8
    
       },
   

}

)