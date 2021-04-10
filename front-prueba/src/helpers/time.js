
export const getTimeFixes = (startDate) => {
    const endDate = new Date();
    const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    const minutos = seconds / 60;
    const horas = minutos / 60;
    const dias = horas / 24;
    if (dias >= 1) {
        return {
            time: Math.round(dias),
            textTime: 'dias'
        }
    } else if(horas >= 1){
        return {
            time: Math.round(horas),
            textTime: 'horas'
        }
    }else if(minutos >= 1){
        return {
            time: Math.round(minutos),
            textTime: 'minutos'
        }
    }else{
        return {
            time: Math.round(seconds),
            textTime: 'segundos'
        }
    }
}