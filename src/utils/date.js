const dateTime = new Date()
function parseDay(day) {
    if(day == 'Fri'){
      return 'Vendredi'
    }
    else if(day == 'Wed'){
      return 'Mercredi'
    }
    else if(day == 'Tue'){
      return 'Mardi'
    }
    else if(day == 'Thu'){
      return 'Jeudi'
    }
    else if(day == 'Mon'){
      return 'Lundi'
    }
    else if(day == 'Sat'){
      return 'Samedi'
    }
    else if(day == 'Sun'){
      return 'Dimanche'
    }
}

function parseMont(mont){
    if(mont == '01'){
        return 'Janvier'
    }
    else if(mont == '02'){
        return 'Février'
    }
    else if(mont == '03') {
        return 'Mars'
    }
    else if(mont == '04') {
        return 'Avril'
    }
    else if(mont == '05') {
        return 'Mai'
    }
    else if(mont == '06') {
        return 'Juin'
    }
    else if(mont == '07') {
        return 'Juillet'
    }
    else if(mont == '08') {
        return 'Aout'
    }
    else if(mont == '09') {
        return 'Septembre'
    }
    else if(mont == '10') {
        return 'Octobre'
    }
    else if(mont == '11') {
        return 'Novembre'
    }
    else if(mont == '12') {
        return 'Décembre'
    }
}

export function date(date){
    const time = date.split('T')[1].split('.')[0].split(':')[0] + ':' + date.split('T')[1].split('.')[0].split(':')[1]
    const day = date.split('T')[0].split('-')[2]
    const mont = date.split('T')[0].split('-')[1]
    const year = date.split('T')[0].split('-')[0]
    const thisday = ((dateTime.getDate()<9?'0':'') +  dateTime.getDate())
    const thismont = (((dateTime.getMonth() + 1)<=9?'0':'')+(dateTime.getMonth() + 1))
    const thisyear = dateTime.getFullYear()
    const fulldate = new Date(year, mont-1, day);
    // console.log('dat',  (this.date.getDate()<9?'0':'') +  this.date.getDate())
    // (date.getDate()<9?'0':'') + date.getDate())+'/'+(((date.getMonth() + 1)<=9?'0':'')+(date.getMonth() + 1))+'/'+date.getFullYear()
      if(thisyear == year && thismont == mont && (thisday - day) == 1){
        // console.log('dat egale',  fulldate.toString())
        return ('Hier à ' + time)
      }
      else if(thisyear == year && thismont == mont && (thisday - day) == 0) {
        return  'Aujourd\'hui à ' + time
    }
      else if(thisyear == year && thismont == mont && (thisday - day) == 2) {
          return 'Il y à 2 jours' + ' à ' + time
      }
      else if(thisyear == year && thismont == mont && (thisday - day) == 3) {
        return 'Il y à 3 jours' + ' à ' + time
      }
      else if(thisyear == year && thismont == mont && (thisday - day) == 4) {
        return 'Il y à 4 jours' + ' à ' + time
      }
      else if(thisyear == year && thismont == mont && (thisday - day) == 5) {
        return 'Il y à 5 jours' + ' à ' + time
      }
      else if(thisyear == year && thismont == mont && (thisday - day) == 6) {
        return 'Il y à 6 jours' + ' à ' + time
      }
      else if(thisyear == year && thismont == mont && (thisday - day) == 7) {
        return 'Il y à une semaine' + ' à ' + time
      }
      else if((thisday - day) > 7 || thismont != mont) {
        return day + ' ' + parseMont(mont) + ' ' + year + ' à ' + time
      }

  }
