import moment from 'moment';

export const parseDate = (date) => moment(date).format("YYYY-MM-DD HH:mm:ss");
