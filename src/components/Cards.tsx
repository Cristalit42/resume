import React from "react";
import { cn } from "../shared/lib/cn";
import { Card } from "./Card";

interface Props {
  className?: string;
  variant: 'grid' | 'flex';
  cardsInfo:
  {
    title: string,
    text: string,
    info?: string,
    rows?: boolean
  }[];

}

export const Cards: React.FC<Props> = ({ className, cardsInfo, variant }) => {

  let _clazz
  let _cardClazz: string

  if (variant == 'grid') {
    _clazz = 'grid gap-[10px] grid-cols-3'
  }
  if (variant == 'flex') {
    _clazz = 'flex flex-col'
  }

  return (
    <div className={cn('', _clazz, className)}>

      {
        cardsInfo.map((item, index) => {

          if (variant == 'grid') {
            _cardClazz = 'min-h-[80px] sm:min-h-[270px] bg-[linear-gradient(180deg,_#f3f3f3_0%,_#e4e4e4_79.82%)]'
          }

          if (variant == 'flex') {
            _cardClazz = 'grid 1000:grid-cols-3 grid-cols-1 items-center justofy-between gap-5 1000:py-10 py-6 1000:px-6 px-4 bg-[#f4f4f4] shadow-custom   '
          }



          return (
            <div
              style={variant === 'flex' ? { zIndex: cardsInfo.length - index } : undefined}
              className={variant == 'grid' && index === 1 ? 'mt-5' : ''}>
              {item.rows &&
                <div className="hidden sm:flex gap-1 items-center mb-4">
                  {[...Array(index + 1)].map((_, i) => (
                    <span key={i} className="h-[20px] w-[2px] bg-primary"></span>
                  ))}
                </div>
              }


              <Card className={cn("", _cardClazz)} title={item.title} text={item.text} info={item.info}></Card>
            </div>
          )
        })
      }


    </div >
  );
};