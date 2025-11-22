import { Globe, ShieldCheck, Coins } from 'lucide-react';
import { FeatureItem } from './types';

export const APP_TITLE = "鑫發達外幣終身壽險";
export const APP_SUBTITLE = "為您的未來，種下一棵遮風避雨的樹";

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: "外幣資產配置",
    subtitle: "雞蛋別放在同一個籃子裡",
    description: "透過美元等強勢貨幣進行佈局，讓您的資產組合更多元。這不僅僅是存錢，更是分散風險的智慧選擇。",
    details: "在全球化的時代，持有單一貨幣風險較高。本計畫協助您輕鬆持有外幣資產，無論是未來出國旅遊、子女留學或移民規劃，都能提前準備，從容應對匯率波動。",
    icon: Globe,
    color: "text-blue-500"
  },
  {
    id: 'f2',
    title: "終身壽險保障",
    subtitle: "留給家人的愛，不打折",
    description: "這不只是一份投資，更是一份對家人的承諾。提供終身的身故與完全失能保障，讓愛延續。",
    details: "許多人只在意獲利，卻忘了風險管理。鑫發達結合了「保障」與「累積」，確保萬一風險發生時，能留下一筆確定的金額照顧摯愛，讓您的責任感化為實質的依靠。",
    icon: ShieldCheck,
    color: "text-red-500"
  },
  {
    id: 'f3',
    title: "定額給付機制",
    subtitle: "像薪水一樣穩穩入袋",
    description: "分期定額給付的設計，避免資產一次被揮霍，為受益人建立長期穩定的現金流。",
    details: "擔心留下的錢被不當使用嗎？您可以選擇分期給付保險金，就像每個月發薪水一樣，細水長流，真正保障受益人的生活品質，這才是最貼心的安排。",
    icon: Coins,
    color: "text-amber-500"
  }
];

export const REMINDER_TEXT = "嘿，記得喔！外幣保單雖然有增值潛力，但也要注意「匯率風險」。如果急著用錢剛好遇到匯率低點，換回台幣可能會心痛。所以這筆錢建議是「長期閒置資金」，放得久，才釀得香。";

export const FOOTER_CONTENT = {
  title: "準備好為未來鋪路了嗎？",
  subtitle: "良好的規劃，始於正確的認知。點擊下方按鈕，確認您的核心收穫。",
  buttonText: "我懂了，查看核心重點",
  popup: {
    title: "核心觀念確認",
    highlightMain: "「穩健增值」+「壽險保障」",
    highlightSub: "鑫發達的價值所在",
    description: "不只是追求數字增長，更是為家人留下一份確定的愛與依靠。",
    closeText: "我知道了"
  }
};