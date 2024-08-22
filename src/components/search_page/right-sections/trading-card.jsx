"use client"
import React, { useEffect, useRef, memo, useState } from 'react';
import { useTheme } from 'next-themes';


function TrandingCard() {
  const container = useRef();
  const { theme, setTheme } = useTheme(); // 'light' : 'dark'
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    if(isMounted){
        console.log('isMounted', isMounted)
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "symbols": [
              [
                "Apple",
                "AAPL|1D"
              ],
              [
                "Google",
                "GOOGL|1D"
              ],
              [
                "Microsoft",
                "MSFT|1D"
              ],
              [
                "NASDAQ:NVDA|1D"
              ],
              [
                "NASDAQ:TSLA|1D"
              ]
            ],
            "chartOnly": false,
            "width": "100%",
            "height": "100%",
            "locale": "ar_AE",
            "colorTheme": "${theme}",
            "autosize": true,
            "showVolume": false,
            "showMA": false,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "candlesticks",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 9,
            "headerFontSize": "small",
            "lineType": 2,
            "dateRanges": [
              "1d|1",
              "1m|30",
              "3m|60",
              "12m|1D"
            ],
            "lineColor": "rgba(247, 124, 128, 1)",
            "dateFormat": "dd/MM/yyyy",
            "upColor": "#22ab94",
            "downColor": "#f7525f",
            "borderUpColor": "#22ab94",
            "borderDownColor": "#f7525f",
            "wickUpColor": "#22ab94",
            "wickDownColor": "#f7525f",
            "className": "trading-card"
        }`;
        const existingIframes = container.current.querySelectorAll('iframe');
        existingIframes.forEach((iframe) => {
          container.current.removeChild(iframe);
        });
        container.current.appendChild(script);
    }
  },[isMounted, theme]);

  return (
    <div className="h-96 w-full bg-white/35 dark:bg-black/15 shadow-medium hover:bg-white/90 dark:hover:bg-black/90 transition rounded-large overflow-hidden">
        <div className="tradingview-widget-container" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    </div>
  );
}

export default memo(TrandingCard);