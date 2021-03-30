import mjml2html from 'mjml'
const feeds = require('./fp2').feeds


class mailBuilder{
    constructor(){
        

        this.build(feed) = () => {
            
            return  `<mjml>
            <mj-body>
            <mj-section>
                <mj-column>
                <mj-text>
                    ${feed.title}
                </mj-text>
                </mj-column>
            </mj-section>
            <mj-section>
                <mj-column>
                <mj-text>
                    ${feed.item}
                </mj-text>
                </mj-column>
            </mj-section>
            </mj-body>
            </mjml>`
  
        }

    }
}