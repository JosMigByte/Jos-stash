#!/bin/bash

##Josobyte

########################################################
#Function: Add()
#Arguments: number, number
#Description: it adds both numbers and return the result
#########################################################
function add(){
  echo Give the first number
	read n1
	echo Give the second number
	read n2
	return $(($n1+$n2))
}

########################################################
#Function: minus()
#Arguments: number, number
#Description: it subtract both numbers and return the result
#########################################################
function minus(){
  echo Give the first number
	read n1
	echo Give the second number
	read n2
  return $(($n1-$n2))
}

########################################################
#Function: div()
#Arguments: number, number
#Description: it divides both numbers and return the result
#########################################################
function div(){
  echo Give the first number
	read n1
	echo Give the second number
	read n2
  return $(($n1/$n2))
}

########################################################
#Function: mul()
#Arguments: number, number
#Description: it multiplies both numbers and return the result
#########################################################
function mul(){
  echo Give the first number
	read n1
	echo Give the second number
	read n2
    return $(($n1*$n2))
}

loop=0 #keeps the user on the loop until he responds with 0
while [ $loop -lt 1 ]
do
	echo Bash Calculator
	echo .
	echo Choose your option typing the number:
	echo 1. Add  - it adds two numbers together.
	echo 2. Minus  - it subtract two numbers.
	echo 3. Divide  - it divides two numbers.
    echo 4. Multiply - it multiplies two numbers.
    echo 0. Close the calculator.
	read response #user choice

	if [ "$response" = "1" ]; then #Add
		add
		result=$?
	fi
    if [ "$response" = "2" ]; then #Minus
		minus
		result=$? # $? saves the return of the last used function
	fi
    if [ "$response" = "3" ]; then #Minus
		div $n1 $n2
		result=$?
	fi
    if [ "$response" = "4" ]; then #Mul
		mul $n1 $n2
		result=$?
	fi
    #if the user response is not valid:
    if [ "$response" -lt "0" ] || [ "$response" -gt "4" ]; then #if response is out of range 
        echo Your option is invalid, please, try again
    fi
    echo .
    echo .
    if [ "$response" = "0" ]; then #exit the calculator breaking the loop
        loop=1;
        echo Bye!
    else
        echo the result is $result #shows result of calculation.
    fi
done
