import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
         View, 
        
         FlatList
        
        } from 'react-native';
        
        import { useState } from 'react';
        import GoalItem from './components/GoalItem';
        import GoalInput from './components/GoalInput';

export default function App(enteredGoalText) {

 const [courseGoals, setCourseGoals] = useState([])
 
 const [modalIsVisible, setModalIsVisible] = useState(false)


 function startAddGoalHandler(){
     
    setModalIsVisible(true)
 }

  function addGoalHandler(){

        setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: props.enteredGoalText, id: Math.random().toString()}])
  }

  function deleteGoalHandler(id){
     
    setCourseGoals(currentCourseGoals => {
      
      return currentCourseGoals.filter((goal) => {
               goal.id !== id   
      });
    })
  }
  return (
    <View style={styles.appContainer}>

    <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
       
     <GoalInput visible={modalIsVisible} goalInputHandler={goalInputHandler} onAddGoal={addGoalHandler}/>
           <View style={styles.goalsContainer}>

              <FlatList data={courseGoals}  renderItem={ (itemData) => {
              
               return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
          
               }}
             keyExtractor={(item, index)=> {
                return item.id

            }}
            alwaysBounceVertical={false}
           />
    
         </View>

       </View>
  
    
  );
}
//StyleSheet objekat koji koristimo u react Nativu


const styles = StyleSheet.create({

  
  
   appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
   }, 
   goalsContainer: {
    flex: 5
   },
 
});