#Variable storing all 26 alphabets
Alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

#Variable storing the non_alpha characters
Non_Alpha=['!',' ','?','.']

#TOF-13 format value
key=13

def Caesar_Cipher(txt):
  
  #Variable storing the desired output/result
    result=""
    
    for i in txt:
        if(i in Non_Alpha):
            result +=i
        else:
            index=(Alphabets.index(i)-key)%26
            result+=Alphabets[index]
    return result
print(Caesar_Cipher("SERR CVMMN!"))
