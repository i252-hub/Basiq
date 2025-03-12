import { Link } from "react-router-dom";
import {useState } from 'react';


const Footer = () =>{

    const [term, setTerm] = useState(false);
    const Term = () => {
        setTerm(false);
    }
    
    const [privacy, setPrivacy] = useState(false);
    const [cookie, setCookie] = useState(false);

  
    const Privacy = () => {
        setPrivacy(false);
    }
    const Cookie = () => {
        setCookie(false);
    }

  
   

    return(
        <footer className="footer">
            {term &&(
                <div className="termcon">
                    <p>
                   <p className="termtitle">Terms and Conditions</p> 
                   <p className="termdesc">Last updated: March 11, 2025<br></br>
                   <br></br><br></br>

Please read these terms and conditions carefully before using Our Service.</p> <br></br>

<p className="titles">Interpretation and Definitions</p><br></br>
<p className="subtitles">Interpretation</p>
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
<br></br>
<br></br>
<p className="subtitles">Definitions</p>
For the purposes of these Terms and Conditions:

Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.

Country refers to: Philippines

Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to basiq.

Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

Service refers to the Website.

Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.

Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.

Website refers to basiq, accessible from basiq.vercel

You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
<br></br>
<br></br>
<p className="titles">Acknowledgment</p>
These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.

Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
<br></br>
<br></br>
<p className="titles">Links to Other Websites</p>
Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
<br></br>
<br></br>
<p className="titles">Termination</p>
We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.
<br></br>
<br></br>
<p className="titles">Limitation of Liability</p>
Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
<br></br>
<br></br>
<p className="titles">"AS IS" and "AS AVAILABLE" Disclaimer</p>
The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
<br></br>
<br></br>
<p className="titles">Governing Law</p>
The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
<br></br>
<br></br>
<p className="titles">Disputes Resolution</p>
If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
<br></br>
<br></br>
<p className="titles">For European Union (EU) Users</p>
If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
<br></br>
<br></br>
<p className="titles">United States Legal Compliance</p>
You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
<br></br>
<br></br>
<p className="titles">Severability and Waiver</p>
<p className="subtitles">Severability</p>
If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

<p className="subtitles">Waiver</p>
Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
<br></br>
<br></br>
<p className="titles">Translation Interpretation</p>
These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
<br></br>
<br></br>
<p className="titles">Changes to These Terms and Conditions</p>
We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
<br></br>
<br></br>
<p className="titles">Contact Us</p>
If you have any questions about these Terms and Conditions, You can contact us:

By email: loremipsum@sample.com
Generated using TermsFeed Privacy Policy Generator
<br></br>
<br></br>
                    </p>
            <div className="termbtn">
                <button className="terma" onClick={Term}>Accept</button>
                <button className="termc" onClick={Term}>Cancel</button>
            </div>
                </div>
            )}

{privacy && (
    <div className="termcon">
        <p>
        <p className="termtitle">Privacy Policy</p> 
        <p className="termdesc">Last updated: March 11, 2025</p> 
        <br></br>
                   <br></br><br></br>

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.<br></br><br></br>

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Free Privacy Policy Generator.
<br></br><br></br>
<p className="titles">Interpretation and Definitions</p>
<br></br>
<p className="subtitles">Interpretation</p>
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.<br></br><br></br>

<br></br>
<p className="subtitles">Definitions</p>
For the purposes of this Privacy Policy:

Account means a unique account created for You to access our Service or parts of our Service.

Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.

Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to basiq.

Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.

Country refers to: Philippines

Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.

Personal Data is any information that relates to an identified or identifiable individual.

Service refers to the Website.

Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.

Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).

Website refers to basiq, accessible from basiq.vercel

You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
<br></br><br></br>

<p className="titles">Collecting and Using Your Personal Data</p>
<br></br>

<p className="subtitles">Types of Data Collected</p>
Personal Data
While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

Email address

Usage Data

Usage Data
Usage Data is collected automatically when using the Service.

Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.

Tracking Technologies and Cookies
We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:

Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the Free Privacy Policy website article.

We use both Session and Persistent Cookies for the purposes set out below:

Necessary / Essential Cookies

Type: Session Cookies

Administered by: Us

Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.

Cookies Policy / Notice Acceptance Cookies

Type: Persistent Cookies

Administered by: Us

Purpose: These Cookies identify if users have accepted the use of cookies on the Website.

Functionality Cookies

Type: Persistent Cookies

Administered by: Us

Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.

For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
<br></br><br></br>
<p className="subtitles">Use of Your Personal Data</p>
The Company may use Personal Data for the following purposes:

To provide and maintain our Service, including to monitor the usage of our Service.

To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.

For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.

To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.

To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.

To manage Your requests: To attend and manage Your requests to Us.

For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.

For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.

We may share Your personal information in the following situations:

With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.
For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
With business partners: We may share Your information with Our business partners to offer You certain products, services or promotions.
With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
With Your consent: We may disclose Your personal information for any other purpose with Your consent.
<br></br><br></br>
<p className="subtitles">Retention of Your Personal Data</p>
The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
<br></br><br></br>
<p className="subtitles">Transfer of Your Personal Data</p>
Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.

Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.

The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
<br></br><br></br>
<p className="subtitles">Delete Your Personal Data</p>
You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.

Our Service may give You the ability to delete certain information about You from within the Service.

You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.

Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
<br></br><br></br>
<p className="subtitles">Disclosure of Your Personal Data</p>
Business Transactions
If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.

Law enforcement
Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).

Other legal requirements
The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:

Comply with a legal obligation
Protect and defend the rights or property of the Company
Prevent or investigate possible wrongdoing in connection with the Service
Protect the personal safety of Users of the Service or the public
Protect against legal liability
<br></br><br></br>
<p className="subtitles">Security of Your Personal Data</p>
The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
<br></br><br></br>
<p className="titles">Children's Privacy</p>
Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
<br></br><br></br>
<p className="titles">Links to Other Websites</p>
Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
<br></br><br></br>
<p className="titles">Changes to this Privacy Policy</p>
We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
<br></br><br></br>
<p className="titles">Contact Us</p>
If you have any questions about this Privacy Policy, You can contact us:

By email: loremipsum@sample.com
Generated using Free Privacy Policy Generator
<br></br><br></br>
        </p>
        <div className="termbtn">
                <button className="terma" onClick={Privacy}>Accept</button>
                <button className="termc" onClick={Privacy}>Cancel</button>
            </div>
    </div>
)}

{cookie && (
    <div className="termcon">
        <p>
        <p className="termtitle">Cookies Policy</p> 
        <p className="termdesc">Last updated: March 11, 2025</p>
        <br></br>
        <br></br><br></br>
This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookies Policy has been created with the help of the Free Cookies Policy Generator.

Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.

We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
<br></br><br></br>
<p className="titles">Interpretation and Definitions</p>
Interpretation
The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
<br></br><br></br>

<p className="subtitles">Definitions</p>
For the purposes of this Cookies Policy:

Company (referred to as either "the Company", "We", "Us" or "Our" in this Cookies Policy) refers to basiq.
Cookies means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.
Website refers to basiq, accessible from basiq.vercel
You means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.
<br></br><br></br>
<p className="titles">The use of the Cookies</p>
Type of Cookies We Use
Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.

We use both session and persistent Cookies for the purposes set out below:

Necessary / Essential Cookies

Type: Session Cookies

Administered by: Us

Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.

Functionality Cookies

Type: Persistent Cookies

Administered by: Us

Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.

Your Choices Regarding Cookies
If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.

If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.

If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.

For the Chrome web browser, please visit this page from Google: https://support.google.com/accounts/answer/32050

For the Internet Explorer web browser, please visit this page from Microsoft: http://support.microsoft.com/kb/278835

For the Firefox web browser, please visit this page from Mozilla: https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored

For the Safari web browser, please visit this page from Apple: https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac

For any other web browser, please visit your web browser's official web pages.
<br></br><br></br>
<p className="subtitles">More Information about Cookies</p>
You can learn more about cookies: Cookies: What Do They Do?.
<br></br><br></br>
<p className="subtitles">Contact Us</p>
If you have any questions about this Cookies Policy, You can contact us:

By email: loremipsum@sample.com
Generated using Free Privacy Policy Generator
        </p>
        <div className="termbtn">
                <button className="terma" onClick={Cookie}>Accept</button>
                <button className="termc" onClick={Cookie}>Cancel</button>
            </div>
    </div>
)}
            <div className="footerlinkscontainer">
                <div className="footerlinks">
                    <div className="footerlinksone">
                        <div className="titlefooterlink">
                            <p>SERVICE</p>
                        </div>
                        <div>
                          <Link to="/#main" className="firstlink"><p className="firstlinkp">Basiq</p></Link> 
                        </div>
                        <div>
                        <Link to="/men" className="firstlink"><p className="firstlinkp" >Shop</p></Link> 
                        </div>
                        <div>
                        <Link to="/contact#contact" className="firstlink"><p className="firstlinkp">Contact Us</p></Link> 
                        </div>
                    </div>
                    <div className="footerlinkstwo">
                    <div className="titlefooterlink">
                            <p>CATEGORIES</p>
                        </div>
                        <div>
                        <Link to="/#themen"><p>Men</p></Link> 
                        </div>
                        <div>
                        <Link to="/#thewomen"><p>Women</p></Link> 
                        </div>
                        <div>
                        <Link to="/#accessories"><p className="acc">Accessories</p></Link> 
                        </div>
                    </div>
                    <div className="footerlinksthree">
                    <div className="titlefooterlink">
                            <p>SOCIAL</p>
                        </div>
                        <div>
                       <p className="fb"> <a href="https://www.facebook.com/">Facebook</a></p>
                        </div>
                        <div>
                        <a href="https://www.instagram.com/"><p>Instagram</p></a>
                        </div>
                        <div className="footerlinksthreesocial">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="policylinks">
                    <div className="policylinksone">
                        <p onClick={()=> setTerm(true)}>Terms and Conditions</p>
                    </div>
                    <div className="policylinkstwo">
                    <p onClick={()=> setPrivacy(true)}>Privacy Policy</p>
                    </div>
                    <div className="policylinksthree">
                    <p onClick={()=> setCookie(true)}>Cookie Policy</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>  © 2025 i252-hub All rights reserved</p>
               </div>
        </footer>
    )
}

export default Footer;