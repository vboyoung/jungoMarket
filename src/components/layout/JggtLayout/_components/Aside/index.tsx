import classNames from "classnames";
import styles from './style.module.scss'
import Text from "@/components/common/Text";
import Container from "@/components/layout/Container";


export default function Aside (){
    return(
       <Container className="relative">
      <aside className={classNames(
        styles.aside,
        'absolute top-8 flex flex-col gap-2 w-24',
      )}>
            <div className="border border-black bg-white p-2 flex flex-col items-center">
                <Text size="xs">찜한 상품</Text>
                <Text size="xs">
                    <span
                      className="material-symbols-outlined"
                      style={{fontSize: '0.725rem'}} 
                    >
                        favorite
                    </span>

                </Text>
            </div>
            <div className="border border-grey p2 bg-white flex flex-col items-center">
                <Text size="xs">최근본상품</Text>
                <div className="mt-2 text-center">
                    <Text size="xs" color="grey" className="block">
                        최근 본 상품이<br />없습니다
                    </Text>
                </div>
            </div>
      </aside>
      </Container> 
    )
}