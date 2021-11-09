import { useState, useEffect } from "react";

const targetTimes = {
  방과후1: [17, 50, 30],
  방과후_쉬는시간: [17, 55, 30],
  방과후2: [18, 35, 30],
  저녁시간: [19, 50, 30],
  야자1: [21, 10, 30],
  야자_쉬는시간: [21, 30, 30],
  야자2: [22, 50, 30],
};

export default function Time() {
  const [whatTime, changeWhatTime] = useState("불러");
  const [timeLeft, changeTime] = useState("오는중");

  useEffect(() => {
    setInterval(main, 1000);
  }, []);

  const main = () => {
    let now = getCurrentTime();

    if (now.getHours() === 17 && now.getMinutes() >= 10) {
      changeWhatTime("방과후1");
      getTimeDifference(
        targetTimes["방과후1"][0],
        targetTimes["방과후1"][1],
        targetTimes["방과후1"][2]
      );
    } else if (
      now.getHours() === 17 &&
      now.getMinutes() >= 50 &&
      now.getMinutes() <= 55
    ) {
      changeWhatTime("방과후_쉬는시간");
      getTimeDifference(
        targetTimes["방과후_쉬는시간"][0],
        targetTimes["방과후_쉬는시간"][1],
        targetTimes["방과후_쉬는시간"][2]
      );
    } else if (now.getHours() === 17 && now.getMinutes() > 55) {
      changeWhatTime("방과후2");
      getTimeDifference(
        targetTimes["방과후2"][0],
        targetTimes["방과후2"][1],
        targetTimes["방과후2"][2]
      );
    } else if (now.getHours() === 18 && now.getMinutes() <= 35) {
      changeWhatTime("저녁시간");
      getTimeDifference(
        targetTimes["저녁시간"][0],
        targetTimes["저녁시간"][1],
        targetTimes["저녁시간"][2]
      );
    } else if (now.getHours() === 18 && now.getMinutes() > 35) {
      changeWhatTime("저녁시간");
      getTimeDifference(
        targetTimes["저녁시간"][0],
        targetTimes["저녁시간"][1],
        targetTimes["저녁시간"][2]
      );
    } else if (now.getHours() === 19 && now.getMinutes() <= 50) {
      changeWhatTime("저녁시간");
      getTimeDifference(
        targetTimes["저녁시간"][0],
        targetTimes["저녁시간"][1],
        targetTimes["저녁시간"][2]
      );
    } else if (now.getHours() === 19 && now.getMinutes() > 50) {
      changeWhatTime("야자1");
      getTimeDifference(
        targetTimes["야자1"][0],
        targetTimes["야자1"][1],
        targetTimes["야자1"][2]
      );
    } else if (now.getHours() === 20) {
      changeWhatTime("야자1");
      getTimeDifference(
        targetTimes["야자1"][0],
        targetTimes["야자1"][1],
        targetTimes["야자1"][2]
      );
    } else if (now.getHours() === 21 && now.getMinutes() <= 10) {
      changeWhatTime("야자1");
      getTimeDifference(
        targetTimes["야자1"][0],
        targetTimes["야자1"][1],
        targetTimes["야자1"][2]
      );
    } else if (
      now.getHours() === 21 &&
      now.getMinutes() > 10 &&
      now.getMinutes() <= 30
    ) {
      changeWhatTime("야자_쉬는시간");
      getTimeDifference(
        targetTimes["야자_쉬는시간"][0],
        targetTimes["야자_쉬는시간"][1],
        targetTimes["야자_쉬는시간"][2]
      );
    } else if (now.getHours() === 21 && now.getMinutes() > 30) {
      changeWhatTime("야자2");
      getTimeDifference(
        targetTimes["야자2"][0],
        targetTimes["야자2"][1],
        targetTimes["야자2"][2]
      );
    } else if (now.getHours() === 22 && now.getMinutes() <= 50) {
      changeWhatTime("야자2");
      getTimeDifference(
        targetTimes["야자2"][0],
        targetTimes["야자2"][1],
        targetTimes["야자2"][2]
      );
    } else {
      changeWhatTime("현재시간");
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      changeTime(
        `${hours}`.padStart(2, "0") +
          ":" +
          `${minutes}`.padStart(2, "0") +
          ":" +
          `${seconds}`.padStart(2, "0")
      );
    }
  };

  const getCurrentTime = () => {
    return new Date();
  };

  const getTimeDifference = (hour, minute, second) => {
    let today = new Date();
    let target = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      hour,
      minute,
      second
    );
    let date = (target.getTime() - today.getTime()) / 1000;
    let hours = Math.floor(date / 3600);
    let minutes = Math.floor((date - hours * 3600) / 60);
    let seconds = Math.floor(date - hours * 3600 - minutes * 60);
    changeTime(
      `${hours}`.padStart(2, "0") +
        ":" +
        `${minutes}`.padStart(2, "0") +
        ":" +
        `${seconds}`.padStart(2, "0")
    );
  };
  return (
    <div>
      {whatTime} : {timeLeft}
    </div>
  );
}
