import './App.css';
import { useState } from "react"
import { useTranslation } from "react-i18next";
import React, { Suspense } from "react";
import {useEffect} from "react"
import { render } from '@testing-library/react';
function App() {
  const [weight, setWeight] = useState();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [time, setTime] = useState(0);
  const calorie = Math.ceil(1.05*weight*3*time)
  const calculate = () =>{
    if(start === "理工学部棟" && end === "教育棟" || start === "教育棟" && end === "理工学部棟"){
      setTime(213/3600)
    }
    else if(start === "理工学部棟" && end === "学生ホール" || start === "学生ホール" && end === "理工学部棟"){
      setTime(280/3600)
    }
    else if(start === "理工学部棟" && end === "中央教育棟" || start === "中央教育棟" && end === "理工学部棟"){
      setTime(423/3600)
    }
    else if(start === "理工学部棟" && end === "本部棟" || start === "本部棟" && end === "理工学部棟"){
      setTime(650/3600)
    }
    else if(start === "理工学部棟" && end === "寮" ||  start === "寮" && end === "理工学部棟"){
      setTime(865/3600)
    }
    else if(start === "理工学部棟" && end === "図書館" || start === "図書館" && end === "理工学部棟"){
      setTime(66/3600)
    }
    else if(start === "S棟" && end === "教育棟"  || start === "教育棟" && end === "S棟"){
      setTime(0)
    }
    else if(start === "S棟" && end === "学生ホール" || start === "学生ホール" && end === "S棟"){
      setTime(0)
    }
    else if(start === "S棟" && end === "中央教育棟" || start === "中央教育棟" && end === "S棟"){
      setTime(0)
    }
    else if(start === "S棟" && end === "本部棟" || start === "本部棟" && end === "S棟"){
      setTime(0)
    }
    else if(start === "S棟" && end === "寮" || start === "寮" && end === "S棟"){
      setTime(0)
    }
    else if(start === "S棟" && end === "図書館" || start === "図書館" && end === "S棟"){
      setTime(0)
    }
    else if(start === "教育棟" && end === "中央教育棟" || start === "中央教育棟" && end === "教育棟"){
      setTime(197/3600)
    }
    else if(start === "教育棟" && end === "学生ホール" || start === "学生ホール" && end === "教育棟"){
      setTime(60/3600)
    }
    else if(start === "教育棟" && end === "本部棟" || start === "本部棟" && end === "教育棟"){
      setTime(364/3600)
    }
    else if(start === "教育棟" && end === "寮" || start === "寮" && end === "教育棟"){
      setTime(579/3600)
    }
    else if(start === "教育棟" && end === "図書館" || start === "図書館" && end === "教育棟"){
      setTime(71/3600)
    }
    else if(start === "学生ホール" && end === "中央教育棟" || start === "中央教育棟" && end === "学生ホール"){
      setTime(195/3600)
    }
    else if(start === "学生ホール" && end === "寮" || start === "寮" && end === "学生ホール"){
      setTime(442/3600)
    }
    else if(start === "学生ホール" && end === "本部棟" || start === "本部棟" && end === "学生ホール"){
      setTime(370/3600)
    }
    else if(start === "中央教育棟" && end === "学生ホール" || start === "学生ホール" && end === "中央教育棟"){
      setTime(206/3600)
    }
    else if(start === "中央教育棟" && end === "図書館" || start === "図書館" && end === "中央教育棟"){
      setTime(268/3600)
    }
    else if(start === "中央教育棟" && end === "本部棟" || start === "本部棟" && end === "中央教育棟"){
      setTime(225/3600)
    }
    else if(start === "中央教育棟" && end === "寮" || start === "寮" && end === "中央教育棟"){
      setTime(442/3600)
    }
    else if(start === "本部棟" && end === "図書館" || start === "図書館" && end === "本部棟"){
      setTime(495/3600)
    }
    else if(start === "本部棟" && end === "学生ホール" || start === "学生ホール" && end === "本部棟"){
      setTime(433/3600)
    }
    else if(start === "本部棟" && end === "寮" || start === "寮" && end === "本部棟"){
      setTime(215/3600)
    }
    else{
      setTime(0)
    }
  }
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);
  return (
    <Suspense fallback={<p>Loading...</p>}>
    <div className="App">
    <button onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>{t('言語を切り替え')}</button>
      <text className="tytle">{t("やせ創価")}</text>
      <text className="explanation">歩いた距離と体重に合わせて消費カロリーをだす計算ページです</text>
        <input
        className="weight"
        value={weight}
        placeholder="体重を入力してください"
        onChange={(event) => setWeight(event.target.value)}
      />
     <div>
     <text className="startPoint">から</text>
     <select className="select" multiple={true} onChange={(event) => setStart(event.target.value)}>
      <option value="理工学部棟">理工学部棟</option>
      <option value="中央教育棟">中央教育棟</option>
      <option value="学生ホール">学生ホール</option>
      <option value="本部棟">本部棟</option>
      <option value="寮">寮</option>
      <option value="教育棟">教育棟</option>
      <option value="図書館">図書館</option>
      <option value="創大正門バス停">創大正門バス停</option>
      <option value="創大門バス停">創大門バス停</option>
      <option value="文学の池">文学の池</option>
      <option value="栄光門">栄光門</option>
      <option value="ビクトリーグラウンド">ビクトリーグラウンド</option>
      <option value="看護学部棟">看護学部棟</option>
      <option value="滝山国際寮">滝山国際寮</option>
      <option value="B棟">B棟</option>
      <option value="S棟">S棟</option>
      </select>
     </div>
     <div>
     <text className="endPoint">まで</text>
     <select className="select" multiple={true} onChange={(event) => setEnd(event.target.value)}>
      <option value="理工学部棟">理工学部棟</option>
      <option value="中央教育棟">中央教育棟</option>
      <option value="学生ホール">学生ホール</option>
      <option value="本部棟">本部棟</option>
      <option value="寮">寮</option>
      <option value="教育棟">教育棟</option>
      <option value="図書館">図書館</option>
      <option value="創大正門バス停">創大正門バス停</option>
      <option value="創大門バス停">創大門バス停</option>
      <option value="文学の池">文学の池</option>
      <option value="栄光門">栄光門</option>
      <option value="ビクトリーグラウンド">ビクトリーグラウンド</option>
      <option value="看護学部棟">看護学部棟</option>
      <option value="滝山国際寮">滝山国際寮</option>
      <option value="B棟">B棟</option>
      <option value="S棟">S棟</option>
      </select>
     </div>
    <text>
      kcal = {calorie}
    </text>
    <button onClick={calculate}>
      調べる
    </button>
    </div>
    </Suspense>
  );
}
export default App;
