import { writable } from "svelte/store";

export enum roleType {
    default = "Сотрудник",
    manager = "Руководитель",
    editor = "Редактор",
    admin = "Администратор"
}

export interface userDataType {
    url: string, 
    name: string,
    role: roleType,
    email: string,
    bio: string,
    birthday: Date,
    surname?: string,
    patronymic?: string
}

let userInitial : userDataType = {
    url: "/icons/chad.jpg",
    name: "Niedlich",
    role: roleType.manager,
    email: "niedlich@gmail.com",
    bio: "Просто обычный человек с большими амбициями",
    birthday: new Date("1982-03-17"),
    surname: "Katze",
    patronymic: ""
}

export enum walletActionType {
    GET = "get",
    PUT = "put",
    OUT = "out",
    BUY = "buy",
    DONE = "done",
  }
export interface historyEntryType {
    action: walletActionType;
    amount?: number;
    maticsAmount?: number,
    date: Date;
    text: string;
    personId?: number;
}
const history: historyEntryType[] = [
{
    action: walletActionType.BUY,
    amount: 1,
    date: new Date("2022-10-3 15:12"),
    text: "Кружка VTB",
},
{
    action: walletActionType.PUT,
    amount: 1,
    date: new Date("2022-10-3 15:12"),
    text: "",
    personId: 0,
},
{
    action: walletActionType.GET,
    amount: 3,
    date: new Date("2022-10-4 22:01"),
    text: "",
    personId: 0,
},
{
    action: walletActionType.PUT,
    amount: 4,
    date: new Date("2022-10-5 7:38"),
    text: "",
    personId: 0,
},
{
    action: walletActionType.BUY,
    amount: 2,
    date: new Date("2022-10-5 10:41"),
    text: "Майка VTB",
},
{
    action: walletActionType.OUT,
    amount: 1,
    maticsAmount: 0.1,
    date: new Date("2022-10-6 12:13"),
    text: "Выведены рубли",
},
{
    action: walletActionType.DONE,
    amount: 15,
    date: new Date("2022-10-6 18:27"),
    text: "Завершен курс",
},
{
    action: walletActionType.BUY,
    maticsAmount: 0.2,
    date: new Date("2022-10-7 4:20"),
    text: "Покупка NFT",
},
];

let walletInitial = {
    value: 100,
    maxValue: 5231,
    history,
    maticsValue: 13.2
}

export const walletData = writable(walletInitial);
export const userData = writable(userInitial);