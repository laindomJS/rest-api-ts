import { newDiaryEntry, Weather, Visibility } from "./types";


// CHECK TYPES
const isString = (string:string):boolean => {
    return typeof string === 'string';
}

const isDate = (date:string):boolean => {
    return Boolean(Date.parse(date));
}

const isWeather = (param:any):boolean => {
    return Object.values(Weather).includes(param);
}

const isVisibility = (param:any):boolean => {
    return Object.values(Visibility).includes(param);
}
// CHECK TYPES



// PARSE ELEMENTS OF THE REQUEST
const parseComment = (commentFromRequest:any): string => {
    if(!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing')
    }
    return commentFromRequest;
}

const parseDate = (dateFromRequest: any):string => {
    if(!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Format of date is invalid');
    }
    return dateFromRequest;
}

const parseWeather = (weatherFromWeather:any): Weather => {
    if(!isString(weatherFromWeather) || !isWeather(weatherFromWeather)) {
        throw new Error('The format of the weather is invalid')
    }
    return weatherFromWeather;
}

const parseVisibility = (visibilityFromWeather:any): Visibility => {
    if(!isString(visibilityFromWeather) || !isVisibility(visibilityFromWeather)) {
        throw new Error('The format is incorrect');
    }
    return visibilityFromWeather;
}
// PARSE ELEMENTS OF THE REQUEST


const toNewDiaryEntry = (object:any):newDiaryEntry => {
    const newEntry: newDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
    }
    return newEntry;
}

export default toNewDiaryEntry;