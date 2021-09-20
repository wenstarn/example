# Aleksandr Golomazov
# Contact information
- **Email:** golomazov.aleksandr@gmail.com
- **Phone:** +79771422698
- **Telegram:** @Wenstan
# Summary
The development of my personality is the main goal. And becoming a good Frontend specialist is a slight part of that. I want to obtain knowledge everyday and that's why I've enrolled for this course. Hopefully, thanks to my persistance in study I could acquire new skills in RS school!
# Skills
- HTML
- CSS
- JS
- C++ (QT)
- Python (pandas, numpy, matplotlib, tensorflow, tkinter)
# Code example
```
function duplicateEncode(word){
    let newString = []
    for(let i = 0; i < word.length; i++) {
      newString.push(0)
    }
    word = word.toLowerCase();
    let length = word.length;
    for(let i = 0; i < length; i++) {
      if (newString[i] === 0) {
        curr = word.indexOf(word[i]);
        last = word.lastIndexOf(word[i]);  
        if (curr != last) {
          for (let j = curr; j < length; j++) {
            if(word[i] == word[j])  newString[j] = ')' 
          }
        }
        else newString[i] = '('
      }
    }  
  return newString.join('')
}
```
# Work experience
# Education
- **University:** Higher School of Economics, Informatics and Computer Engineering(third-year student)
- **Courses**
    - The Web Developer Bootcamp 2021
    - FreeCodeCamp
# English level
**B1**(I had classes with a native speaker)

