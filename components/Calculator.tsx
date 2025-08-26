import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import { Colors } from '@/constants/Colors'

const {width} = Dimensions.get('window');


interface CalculatorButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
  size? : 'normal'| 'double' | 'tripple';
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  title,
  onPress,
  color = Colors.button.default,
  textColor = Colors.button.text,
  size = 'normal'
})=>{
  const buttonWidth = size === 'double' ? width / 2.5: size === 'tripple' ? width / 1.25: width/ 4.5;
  return (
    <TouchableOpacity
      style= {[styles.button, {backgroundColor: color, width: buttonWidth}]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  )
}

const Calculator:FC = () => {
  const [display ,  setDisplay] = useState('0')
  const [previousValue , setPreviousValue]  = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false)


  const inputNumber = (num: string)=>{
    if(waitingForOperand){
      setDisplay(num);
      setWaitingForOperand(false);
    }else{
      setDisplay(display === '0' ? num : display + num)
    }
  };

  const inputDot = () => {
    if(waitingForOperand){
      setDisplay('0.');
      setWaitingForOperand(false);
    }else if(display.indexOf('.') === -1){
      setDisplay(display + '.' )
    }
  };

  const clear = () =>{
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null)
    setWaitingForOperand(false)
  };
  
   const buttons = [
    ['C', '⌫', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

   const getButtonColor = (button: string) => {
    if (['÷', '×', '-', '+', '='].includes(button)) {
      return Colors.button.operator;
    }
    if (['C', '⌫', '%'].includes(button)) {
      return Colors.button.special;
    }
    return Colors.button.default;
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.diplayText} numberOfLines={1} adjustsFontSizeToFit>
          0
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
          {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <CalculatorButton
                key={button}
                title={button}
                onPress={() => {
                  if (button === 'C') clear();
                  else if (button === '⌫') handleBackspace();
                  else if (button === '%') handlePercent();
                  else if (button === '=') handleEquals();
                  else if (['÷', '×', '-', '+'].includes(button)) performOperation(button);
                  else if (button === '.') inputDot();
                  else inputNumber(button);
                }}
                color={getButtonColor(button)}
                textColor={button === '=' ? Colors.button.text : Colors.button.text}
                size={button === '0' ? 'double' : 'normal'}
              />
            ))}
          </View>
        ))}
      </View>
       
    </View>
  )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        
    },
    displayContainer: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
    },
    diplayText: {
      fontSize: 60,
      color: Colors.text.primary,
      fontWeight: '200',
    },
    buttonsContainer: {
        flex: 5,
        padding: 10,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        height: 70,
        borderRadius: 35,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '400',
    },

})