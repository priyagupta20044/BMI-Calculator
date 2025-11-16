const form = document.querySelector('form')
    form.addEventListener('submit',(event)=>{
        event.preventDefault()
        let height = parseInt(document.querySelector('#height').value)
        let weight = parseInt(document.querySelector('#weight').value)
        const result = document.querySelector('#result')
        

        if (height == ' ' || height <=0 || isNaN(height)){
            result.innerText = "Please Enter a valid height"
        }
        else if (weight == ' ' || weight <=0 || isNaN(weight)){
            result.innerText = "Please Enter a valid weight"
        }
        else{
            height /= 100
            const bmi = weight/(height*height)
            result.innerText = `Your BMI is : ${bmi}`

            const signalElement = document.createElement('span')
            const signalText = document.createElement('span')
            signalElement.style.height = '10px'
            signalElement.style.width = '10px'
            signalElement.style.borderRadius = '50%'
            signalElement.style.display = 'inline-block'
            signalElement.style.marginRight = '5px'

            if (bmi<18.6){
                signalElement.style.backgroundColor = 'yellow'
                signalText.innerText = 'Underweight'
            }
            else if (bmi>=18.6 && bmi<=29.4){
                signalElement.style.backgroundColor = 'green'
                signalText.innerText = 'Normal weight'
            }
            else{
                signalElement.style.backgroundColor = 'red'
                signalText.innerText = 'Overweight'
            }

            const ele = document.querySelector('.signal')
            ele.appendChild(signalElement)
            ele.appendChild(signalText)
        }
    })
    