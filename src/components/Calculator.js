import React, { useState } from 'react'

const Calculator=()=>{
    const [input,setInput]=useState('');
    function reset(){
        setInput('');
    }
    function calculator(){
        const arr=[];
        let index=0;
        for(let i=0;i<input.length;i++){
            if(input[i]=='+'||input[i]=='-'||input[i]=='*'||input[i]=='/'){
                arr.push(input.substring(index,i));
                arr.push(input[i]);
                index=i+1;
            }
        }
        if (index<input.length) arr.push(input.substring(index,input.length))
        for(let i=0;i<arr.length;i++){
            if(arr[i]=='/'){
                let div=Number(arr[i-1])/Number(arr[i+1]);
                arr[i-1]=div;
                arr.splice(i,2);
                i--;
            }
        }
        for(let i=0;i<arr.length;i++){
            if(arr[i]=='*'){
                let mul=Number(arr[i-1])*Number(arr[i+1]);
                arr[i-1]=mul;
                arr.splice(i,2);
                i--;
            }
        }
        for(let i=0;i<arr.length;i++){
            if(arr[i]=='+'){
                let sum=Number(arr[i-1])+Number(arr[i+1]);
                arr[i-1]=sum;
                arr.splice(i,2);
                i--;
            }else if(arr[i]=='-'){
                if(i==0){
                    arr[i]=0-arr[i+1]
                    arr.splice(i+1,1);
                }else{
                    let sub=Number(arr[i-1])-Number(arr[i+1]);
                    arr[i-1]=sub;
                    arr.splice(i,2);
                    i--;
                }
            }
        }
        setInput(arr[0])
        console.log(arr);
    }
    return <div className='Calculator'>
        <table>
            <thead>
                <tr>
                    <th colSpan={4}>
                        <input value={input} type='text' readOnly/>
                    </th>
                </tr>
            </thead>
           <tbody>
           <tr>
                <td><button onClick={reset}>C</button></td>
                <td><button onClick={()=>setInput(input+'/')}>/</button></td>
                <td><button onClick={()=>setInput(input+'*')}>*</button></td>
                <td><button onClick={()=>setInput(input+'-')}>-</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>setInput(input+7)}>7</button></td>
                <td><button onClick={()=>setInput(input+8)}>8</button></td>
                <td><button onClick={()=>setInput(input+9)}>9</button></td>
                <td rowSpan={2}><button onClick={()=>setInput(input+'+')}>+</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>setInput(input+4)}>4</button></td>
                <td><button onClick={()=>setInput(input+5)}>5</button></td>
                <td><button onClick={()=>setInput(input+6)}>6</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>setInput(input+1)}>1</button></td>
                <td><button onClick={()=>setInput(input+2)}>2</button></td>
                <td><button onClick={()=>setInput(input+3)}>3</button></td>
                <td rowSpan={2}><button onClick={calculator}>=</button></td>
            </tr>
            <tr>
                <td><button onClick={()=>setInput(input+0)}>0</button></td>
                <td><button onClick={()=>setInput(input+'.')}>.</button></td>
                <td><button></button></td>
            </tr>
           </tbody>
        </table>
    </div>
}

export default Calculator