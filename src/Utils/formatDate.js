import dayjs from "dayjs";

export const formatDate = (date) => {
	return dayjs(date).format("DD/MM/YYYY ");
};

export const formatDateWithHours = (date) => {
	return dayjs(date).format("DD/MM/YYYY hh:mm:ss A");
};
