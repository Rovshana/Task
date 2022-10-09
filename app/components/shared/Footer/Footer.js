import React from 'react'
import { Button, FooterTopConent, FooterTopContainer, Input, SmallContainer, Span, LastItems, SocialSpan, Paragraph, FooterItem } from './Footer.styled'
import Image from 'next/Image'


 function Footer(props) {
    

    return (
        <FooterTopContainer>
            <FooterTopConent>
                <Span>Biz kimiz?</Span>
                <Span>Hakkımızda </Span>
                <Span>Kariyer </Span>
                <Span>İletişim </Span>
                <Span>Bizde Satış Yap</Span>
            </FooterTopConent>
            <FooterTopConent>
                <Span>Yardım</Span>
                <Span>Sıkça Sorulan Sorula </Span>
                <Span>Canlı Yardım</Span>
                <Span>Naslk İade Ederim </Span>
                <Span>Nasıl Sipariş Verili</Span>
            </FooterTopConent>
            <FooterTopConent>
                <Span>Kampanyalar</Span>
                <Span>Özel kampanyala </Span>
                <Span>Bayram kampanyalar</Span>
                <Span>Aktif Kampanyalar </Span>
                <Span>VIP Üyelik</Span>
            </FooterTopConent>
            <div>
                <Span>Sosyal Medya</Span>
                <FooterItem>
                    <Image src='/Footer/fb.png' width={25} height={25} style={{borderRadius: "50%", marginRight: "5px"}}/>
                   Facebook
                </FooterItem>
                <FooterItem>
                <Image src='/Footer/insta.svg' width={18} height={18} style={{borderRadius: "50%",marginRight: "5px" }}/>
                    Instagram
                </FooterItem>
                <FooterItem>
                <Image src='/Footer/Twitter.png' width={26} height={26} style={{marginRight: "5px"}}/>
                    Twitter
                </FooterItem>
                <FooterItem>
                <Image src='/Footer/youtubee.png' width={36} height={36} style={{borderRadius: "50%", marginRight: "5px"}}/>
                    You tube
                </FooterItem>
    
            </div>
            <LastItems>
                <Span>İndirim ve yenilikler için abone olun</Span>
                <div>
                <Input placeholder="E-mail" />
                <Button>Abone ol</Button>
                </div>
                <Paragraph>Bültene kaydolarak Gizlilik Politikası Gizlilik Politikasını kabul etmiş olursunuz</Paragraph>
            </LastItems>
           
        </FooterTopContainer>
       
    )
        
}
 export default Footer