// console.clear()

let customerRegFormNew = `
    <div class="contentintro-content">
        <div class="order--details-product" style="width: 700px; float: left; padding-bottom: 80px;">
            <h3>Enter customer information</h3>
            <form class="order--step-customer-form">
                <div class="form--type-wrapper">
                  <p class="radio-paragraph">
                      <input name="customerDataTicket" id="existingCustomerOff" value="false" checked="" type="radio" />
                      <label for="existingCustomerOff" class="radioLabel">
                          <span></span> New customer
                      </label>
                  </p>
                  <p class="radio-paragraph mg-bottom-20">
                      <input name="customerDataTicket" id="existingCustomerOn" value="true" type="radio" />
                      <label for="existingCustomerOn" class="radioLabel">
                          <span></span> Existing customer
                      </label>
                  </p>
                </div>
                <div id="order--step-customer-form">
                    <div class="form--label-wrapper">
                        <label for="customerType"> Customer type: </label>
                    </div>
                    <div class="form--input-wrapper">
                        <select name="customerType" id="customerType" class="form--order-input">
                            <option value="private" selected="selected">Private customer</option>
                            <option value="organisation_no_vat">Company customer</option>
                        </select>
                    </div>
                    <div class="form--label-wrapper">
                        <label id="labelCustomerName" for="customerName">Full name:</label>
                    </div>
                    <div class="form--input-wrapper">
                        <input name="customerName" value="" id="customerName" class="form--order-input" type="text" />
                    </div>
                    <div class="form--label-wrapper">
                        <label id="labelCustomerEmail" for="customerEmail">Email:</label>
                    </div>
                    <div class="form--input-wrapper">
                        <input class="form--order-input" value="" type="text" />
                    </div>
                    <div class="form--label-wrapper">
                        <label id="labelCustomerCode" for="customerCode">Date of birth (dd-mm-yyyy):</label>
                    </div>
                    <div class="form--input-wrapper">
                        <select id="birthdate_day" class="birthdate form--order-input" style="order: 1;"><option>Day..</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                        <select id="birthdate_month" class="birthdate form--order-input" style="order: 2;"><option>Month..</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>
                        <select id="birthdate_year" class="birthdate form--order-input" style="order: 3;"><option>Year..</option><option value="1908">1908</option><option value="1909">1909</option><option value="1910">1910</option><option value="1911">1911</option><option value="1912">1912</option><option value="1913">1913</option><option value="1914">1914</option><option value="1915">1915</option><option value="1916">1916</option><option value="1917">1917</option><option value="1918">1918</option><option value="1919">1919</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option></select>
                    </div>
                    <div class="form--label-wrapper">
                        <label for="customerCountry">Country:</label>
                    </div>
                    <div class="form--input-wrapper">
                        <select name="customerCountry" id="customerCountry" class="form--order-input"><option value="">- - Choose your country - -</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire, Saint Eustatius and Saba">Bonaire, Saint Eustatius and Saba</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo (Democratic Republic of the)">Congo (Democratic Republic of the)</option><option value="Congo (Republic of the)">Congo (Republic of the)</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire (Ivory Coast)">Cote D’Ivoire (Ivory Coast)</option><option value="Cuba">Cuba</option><option value="Curacao">Curacao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji Fiji Islands">Fiji Islands</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadaloupe">Guadaloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hrvatska (Croatia)">Hrvatska (Croatia)</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao">Lao</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands, the">Netherlands</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Island">Pitcairn Island</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Martin">Saint Martin</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Dutch Part)">Sint Maarten (Dutch Part)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain" selected="selected">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="St. Helena">St. Helena</option><option value="St. Kitts and Nevis">St. Kitts and Nevis</option><option value="St. Lucia">St. Lucia</option><option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option><option value="St. Vincent and the Grenadines">St. Vincent and the Grenadines</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp;amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau (Tokelau Islands)">Tokelau (Tokelau Islands)</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="USA">United States</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="US Virgin Islands">US Virgin Islands</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Viet Nam">Viet Nam</option><option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option><option value="Åland Islands">Åland Islands</option></select>
                    </div>
                    <div class="form--label-wrapper">
                        <label for="customerAddress1">Address:</label>
                    </div>
                    <div class="form--input-wrapper">
                        <input class="form--order-input ui-autocomplete-input" value="" data-bind="initializeValue: order.customer.address, textInput: order.customer.address, autocomplete: { source: order.customer.dawa.results(), select: order.customer.dawa.selectResult }" autocomplete="off" type="text" />
                    </div>
                    <div class="form--label-wrapper">
                        <label for="customerZip">Zip &amp; City:</label>
                    </div>
                    <div class="form--input-wrapper">
                        <input class="form--order-input" name="customerZip" id="customerZip" value="" data-bind="initializeValue: order.customer.zipCode, order.customer.zipCode" type="text" />
                        <input class="form--order-input" name="customerCity" id="customerCity" value="" data-bind="initializeValue: order.customer.city, value: order.customer.city" type="text" />
                    </div>
                    <div class="form--label-wrapper">
                        <label for="customerMobile">Mobile phone<span class="contextLink"> ( <a href="#" class="contextHelp"><span>We ask for your mobile number to send you important messages about your order by SMS. For certain types of orders, we also send an activation code by SMS, which means very fast creation of the web space. All text messages are sent in the daytime and you can always change your mobile number.</span>?</a> )</span>:</label>
                    </div>
                    <div class="form--input-wrapper">
                        <select name="customerMobileCode" id="customerMobileCode" class="form--order-input"><option value="+1">+1</option><option value="+20">+20</option><option value="+211">+211</option><option value="+212">+212</option><option value="+213">+213</option><option value="+216">+216</option><option value="+218">+218</option><option value="+220">+220</option><option value="+221">+221</option><option value="+222">+222</option><option value="+223">+223</option><option value="+224">+224</option><option value="+225">+225</option><option value="+226">+226</option><option value="+227">+227</option><option value="+228">+228</option><option value="+229">+229</option><option value="+230">+230</option><option value="+231">+231</option><option value="+232">+232</option><option value="+233">+233</option><option value="+234">+234</option><option value="+235">+235</option><option value="+236">+236</option><option value="+237">+237</option><option value="+238">+238</option><option value="+239">+239</option><option value="+240">+240</option><option value="+241">+241</option><option value="+242">+242</option><option value="+243">+243</option><option value="+244">+244</option><option value="+245">+245</option><option value="+246">+246</option><option value="+248">+248</option><option value="+249">+249</option><option value="+250">+250</option><option value="+251">+251</option><option value="+252">+252</option><option value="+253">+253</option><option value="+254">+254</option><option value="+255">+255</option><option value="+256">+256</option><option value="+257">+257</option><option value="+258">+258</option><option value="+260">+260</option><option value="+261">+261</option><option value="+262">+262</option><option value="+263">+263</option><option value="+264">+264</option><option value="+265">+265</option><option value="+266">+266</option><option value="+267">+267</option><option value="+268">+268</option><option value="+269">+269</option><option value="+27">+27</option><option value="+290">+290</option><option value="+291">+291</option><option value="+297">+297</option><option value="+298">+298</option><option value="+299">+299</option><option value="+30">+30</option><option value="+31">+31</option><option value="+32">+32</option><option value="+33">+33</option><option value="+34">+34</option><option value="+350">+350</option><option value="+351">+351</option><option value="+352">+352</option><option value="+353">+353</option><option value="+354">+354</option><option value="+355">+355</option><option value="+356">+356</option><option value="+357">+357</option><option value="+358">+358</option><option value="+359">+359</option><option value="+36">+36</option><option value="+370">+370</option><option value="+371">+371</option><option value="+372">+372</option><option value="+373">+373</option><option value="+374">+374</option><option value="+375">+375</option><option value="+376">+376</option><option value="+377">+377</option><option value="+378">+378</option><option value="+380">+380</option><option value="+381">+381</option><option value="+382">+382</option><option value="+385">+385</option><option value="+386">+386</option><option value="+387">+387</option><option value="+389">+389</option><option value="+39">+39</option><option value="+40">+40</option><option value="+41">+41</option><option value="+420">+420</option><option value="+421">+421</option><option value="+423">+423</option><option value="+43">+43</option><option value="+44">+44</option><option value="+45">+45</option><option value="+46">+46</option><option value="+47">+47</option><option value="+48">+48</option><option value="+49">+49</option><option value="+500">+500</option><option value="+501">+501</option><option value="+502">+502</option><option value="+503">+503</option><option value="+504">+504</option><option value="+505">+505</option><option value="+506">+506</option><option value="+507">+507</option><option value="+508">+508</option><option value="+509">+509</option><option value="+51">+51</option><option value="+52">+52</option><option value="+53">+53</option><option value="+54">+54</option><option value="+55">+55</option><option value="+56">+56</option><option value="+57">+57</option><option value="+58">+58</option><option value="+590">+590</option><option value="+591">+591</option><option value="+592">+592</option><option value="+593">+593</option><option value="+594">+594</option><option value="+595">+595</option><option value="+596">+596</option><option value="+597">+597</option><option value="+598">+598</option><option value="+599">+599</option><option value="+60">+60</option><option value="+61">+61</option><option value="+62">+62</option><option value="+63">+63</option><option value="+64">+64</option><option value="+65">+65</option><option value="+66">+66</option><option value="+670">+670</option><option value="+672">+672</option><option value="+673">+673</option><option value="+674">+674</option><option value="+675">+675</option><option value="+676">+676</option><option value="+677">+677</option><option value="+678">+678</option><option value="+679">+679</option><option value="+680">+680</option><option value="+681">+681</option><option value="+682">+682</option><option value="+683">+683</option><option value="+684">+684</option><option value="+685">+685</option><option value="+686">+686</option><option value="+687">+687</option><option value="+688">+688</option><option value="+689">+689</option><option value="+690">+690</option><option value="+691">+691</option><option value="+692">+692</option><option value="+699">+699</option><option value="+7">+7</option><option value="+81">+81</option><option value="+82">+82</option><option value="+84">+84</option><option value="+852">+852</option><option value="+853">+853</option><option value="+855">+855</option><option value="+856">+856</option><option value="+86">+86</option><option value="+872">+872</option><option value="+880">+880</option><option value="+886">+886</option><option value="+90">+90</option><option value="+91">+91</option><option value="+92">+92</option><option value="+93">+93</option><option value="+94">+94</option><option value="+95">+95</option><option value="+960">+960</option><option value="+961">+961</option><option value="+962">+962</option><option value="+963">+963</option><option value="+964">+964</option><option value="+965">+965</option><option value="+966">+966</option><option value="+967">+967</option><option value="+968">+968</option><option value="+970">+970</option><option value="+971">+971</option><option value="+972">+972</option><option value="+973">+973</option><option value="+974">+974</option><option value="+975">+975</option><option value="+976">+976</option><option value="+977">+977</option><option value="+98">+98</option><option value="+992">+992</option><option value="+993">+993</option><option value="+994">+994</option><option value="+995">+995</option><option value="+996">+996</option><option value="+998">+998</option></select>
                        <input id="customerMobile" name="customerMobile" class="form--order-input" value="" data-bind="attr: { placeholder: order.customer.mobilePlaceholder }" placeholder="" type="text" />
                    </div>
                    <div class="form--owner-type">
                        <p class="chosereg"><em>Will the owner of the domain be the same as entered above?</em></p>
                        <p class="choice">
                            <input name="registrantCustomer" value="true" checked="checked" id="ownerIdenticalYes" type="radio" />
                            <label for="ownerIdenticalYes" id="ownerIdenticalYesLabel"><span></span>Yes</label>
                            <input name="registrantCustomer" value="false" id="ownerIdenticalNo" type="radio" />
                            <label for="ownerIdenticalNo" id="ownerIdenticalNoLabel"><span></span>No</label>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
`

let customerNewInputs = `
    <div class="form--label-wrapper">
        <label for="customerType"> Customer type: </label>
    </div>
    <div class="form--input-wrapper">
        <select name="customerType" id="customerType" class="form--order-input">
            <option value="private" selected="selected">Private customer</option>
            <option value="organisation_no_vat">Company customer</option>
        </select>
    </div>
    <div class="form--label-wrapper">
        <label id="labelCustomerName" for="customerName">Full name:</label>
    </div>
    <div class="form--input-wrapper">
        <input name="customerName" value="" id="customerName" class="form--order-input" type="text" />
    </div>
    <div class="form--label-wrapper">
        <label id="labelCustomerEmail" for="customerEmail">Email:</label>
    </div>
    <div class="form--input-wrapper">
        <input class="form--order-input" value="" type="text" />
    </div>
    <div class="form--label-wrapper">
        <label id="labelCustomerCode" for="customerCode">Date of birth (dd-mm-yyyy):</label>
    </div>
    <div class="form--input-wrapper">
        <select id="birthdate_day" class="birthdate form--order-input" style="order: 1;"><option>Day..</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
        <select id="birthdate_month" class="birthdate form--order-input" style="order: 2;"><option>Month..</option><option value="01">1</option><option value="02">2</option><option value="03">3</option><option value="04">4</option><option value="05">5</option><option value="06">6</option><option value="07">7</option><option value="08">8</option><option value="09">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select>
        <select id="birthdate_year" class="birthdate form--order-input" style="order: 3;"><option>Year..</option><option value="1908">1908</option><option value="1909">1909</option><option value="1910">1910</option><option value="1911">1911</option><option value="1912">1912</option><option value="1913">1913</option><option value="1914">1914</option><option value="1915">1915</option><option value="1916">1916</option><option value="1917">1917</option><option value="1918">1918</option><option value="1919">1919</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option></select>
    </div>
    <div class="form--label-wrapper">
        <label for="customerCountry">Country:</label>
    </div>
    <div class="form--input-wrapper">
        <select name="customerCountry" id="customerCountry" class="form--order-input"><option value="">- - Choose your country - -</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bonaire, Saint Eustatius and Saba">Bonaire, Saint Eustatius and Saba</option><option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option><option value="Botswana">Botswana</option><option value="Bouvet Island (Bouvetoya)">Bouvet Island (Bouvetoya)</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="British Virgin Islands">British Virgin Islands</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo (Democratic Republic of the)">Congo (Democratic Republic of the)</option><option value="Congo (Republic of the)">Congo (Republic of the)</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote D'Ivoire (Ivory Coast)">Cote D’Ivoire (Ivory Coast)</option><option value="Cuba">Cuba</option><option value="Curacao">Curacao</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji Fiji Islands">Fiji Islands</option><option value="Finland">Finland</option><option value="France">France</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadaloupe">Guadaloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guernsey">Guernsey</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hrvatska (Croatia)">Hrvatska (Croatia)</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran">Iran</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Isle of Man">Isle of Man</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jersey">Jersey</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Kuwait">Kuwait</option><option value="Kyrgyz Republic">Kyrgyz Republic</option><option value="Lao">Lao</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macao">Macao</option><option value="Macedonia">Macedonia</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia">Micronesia</option><option value="Moldova">Moldova</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montenegro">Montenegro</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands, the">Netherlands</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="North Korea">North Korea</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Palestinian Territory">Palestinian Territory</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn Island">Pitcairn Island</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Barthelemy">Saint Barthelemy</option><option value="Saint Martin">Saint Martin</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Serbia">Serbia</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Sint Maarten (Dutch Part)">Sint Maarten (Dutch Part)</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="South Korea">South Korea</option><option value="South Sudan">South Sudan</option><option value="Spain" selected="selected">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="St. Helena">St. Helena</option><option value="St. Kitts and Nevis">St. Kitts and Nevis</option><option value="St. Lucia">St. Lucia</option><option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option><option value="St. Vincent and the Grenadines">St. Vincent and the Grenadines</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard &amp; Jan Mayen Islands">Svalbard &amp;amp; Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan">Taiwan</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania">Tanzania</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau (Tokelau Islands)">Tokelau (Tokelau Islands)</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="USA">United States</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="US Virgin Islands">US Virgin Islands</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Viet Nam">Viet Nam</option><option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option><option value="Åland Islands">Åland Islands</option></select>
    </div>
    <div class="form--label-wrapper">
        <label for="customerAddress1">Address:</label>
    </div>
    <div class="form--input-wrapper">
        <input class="form--order-input ui-autocomplete-input" value="" data-bind="initializeValue: order.customer.address, textInput: order.customer.address, autocomplete: { source: order.customer.dawa.results(), select: order.customer.dawa.selectResult }" autocomplete="off" type="text" />
    </div>
    <div class="form--label-wrapper">
        <label for="customerZip">Zip &amp; City:</label>
    </div>
    <div class="form--input-wrapper">
        <input class="form--order-input" name="customerZip" id="customerZip" value="" data-bind="initializeValue: order.customer.zipCode, order.customer.zipCode" type="text" />
        <input class="form--order-input" name="customerCity" id="customerCity" value="" data-bind="initializeValue: order.customer.city, value: order.customer.city" type="text" />
    </div>
    <div class="form--label-wrapper">
        <label for="customerMobile">Mobile phone<span class="contextLink"> ( <a href="#" class="contextHelp"><span>We ask for your mobile number to send you important messages about your order by SMS. For certain types of orders, we also send an activation code by SMS, which means very fast creation of the web space. All text messages are sent in the daytime and you can always change your mobile number.</span>?</a> )</span>:</label>
    </div>
    <div class="form--input-wrapper">
        <select name="customerMobileCode" id="customerMobileCode" class="form--order-input"><option value="+1">+1</option><option value="+20">+20</option><option value="+211">+211</option><option value="+212">+212</option><option value="+213">+213</option><option value="+216">+216</option><option value="+218">+218</option><option value="+220">+220</option><option value="+221">+221</option><option value="+222">+222</option><option value="+223">+223</option><option value="+224">+224</option><option value="+225">+225</option><option value="+226">+226</option><option value="+227">+227</option><option value="+228">+228</option><option value="+229">+229</option><option value="+230">+230</option><option value="+231">+231</option><option value="+232">+232</option><option value="+233">+233</option><option value="+234">+234</option><option value="+235">+235</option><option value="+236">+236</option><option value="+237">+237</option><option value="+238">+238</option><option value="+239">+239</option><option value="+240">+240</option><option value="+241">+241</option><option value="+242">+242</option><option value="+243">+243</option><option value="+244">+244</option><option value="+245">+245</option><option value="+246">+246</option><option value="+248">+248</option><option value="+249">+249</option><option value="+250">+250</option><option value="+251">+251</option><option value="+252">+252</option><option value="+253">+253</option><option value="+254">+254</option><option value="+255">+255</option><option value="+256">+256</option><option value="+257">+257</option><option value="+258">+258</option><option value="+260">+260</option><option value="+261">+261</option><option value="+262">+262</option><option value="+263">+263</option><option value="+264">+264</option><option value="+265">+265</option><option value="+266">+266</option><option value="+267">+267</option><option value="+268">+268</option><option value="+269">+269</option><option value="+27">+27</option><option value="+290">+290</option><option value="+291">+291</option><option value="+297">+297</option><option value="+298">+298</option><option value="+299">+299</option><option value="+30">+30</option><option value="+31">+31</option><option value="+32">+32</option><option value="+33">+33</option><option value="+34">+34</option><option value="+350">+350</option><option value="+351">+351</option><option value="+352">+352</option><option value="+353">+353</option><option value="+354">+354</option><option value="+355">+355</option><option value="+356">+356</option><option value="+357">+357</option><option value="+358">+358</option><option value="+359">+359</option><option value="+36">+36</option><option value="+370">+370</option><option value="+371">+371</option><option value="+372">+372</option><option value="+373">+373</option><option value="+374">+374</option><option value="+375">+375</option><option value="+376">+376</option><option value="+377">+377</option><option value="+378">+378</option><option value="+380">+380</option><option value="+381">+381</option><option value="+382">+382</option><option value="+385">+385</option><option value="+386">+386</option><option value="+387">+387</option><option value="+389">+389</option><option value="+39">+39</option><option value="+40">+40</option><option value="+41">+41</option><option value="+420">+420</option><option value="+421">+421</option><option value="+423">+423</option><option value="+43">+43</option><option value="+44">+44</option><option value="+45">+45</option><option value="+46">+46</option><option value="+47">+47</option><option value="+48">+48</option><option value="+49">+49</option><option value="+500">+500</option><option value="+501">+501</option><option value="+502">+502</option><option value="+503">+503</option><option value="+504">+504</option><option value="+505">+505</option><option value="+506">+506</option><option value="+507">+507</option><option value="+508">+508</option><option value="+509">+509</option><option value="+51">+51</option><option value="+52">+52</option><option value="+53">+53</option><option value="+54">+54</option><option value="+55">+55</option><option value="+56">+56</option><option value="+57">+57</option><option value="+58">+58</option><option value="+590">+590</option><option value="+591">+591</option><option value="+592">+592</option><option value="+593">+593</option><option value="+594">+594</option><option value="+595">+595</option><option value="+596">+596</option><option value="+597">+597</option><option value="+598">+598</option><option value="+599">+599</option><option value="+60">+60</option><option value="+61">+61</option><option value="+62">+62</option><option value="+63">+63</option><option value="+64">+64</option><option value="+65">+65</option><option value="+66">+66</option><option value="+670">+670</option><option value="+672">+672</option><option value="+673">+673</option><option value="+674">+674</option><option value="+675">+675</option><option value="+676">+676</option><option value="+677">+677</option><option value="+678">+678</option><option value="+679">+679</option><option value="+680">+680</option><option value="+681">+681</option><option value="+682">+682</option><option value="+683">+683</option><option value="+684">+684</option><option value="+685">+685</option><option value="+686">+686</option><option value="+687">+687</option><option value="+688">+688</option><option value="+689">+689</option><option value="+690">+690</option><option value="+691">+691</option><option value="+692">+692</option><option value="+699">+699</option><option value="+7">+7</option><option value="+81">+81</option><option value="+82">+82</option><option value="+84">+84</option><option value="+852">+852</option><option value="+853">+853</option><option value="+855">+855</option><option value="+856">+856</option><option value="+86">+86</option><option value="+872">+872</option><option value="+880">+880</option><option value="+886">+886</option><option value="+90">+90</option><option value="+91">+91</option><option value="+92">+92</option><option value="+93">+93</option><option value="+94">+94</option><option value="+95">+95</option><option value="+960">+960</option><option value="+961">+961</option><option value="+962">+962</option><option value="+963">+963</option><option value="+964">+964</option><option value="+965">+965</option><option value="+966">+966</option><option value="+967">+967</option><option value="+968">+968</option><option value="+970">+970</option><option value="+971">+971</option><option value="+972">+972</option><option value="+973">+973</option><option value="+974">+974</option><option value="+975">+975</option><option value="+976">+976</option><option value="+977">+977</option><option value="+98">+98</option><option value="+992">+992</option><option value="+993">+993</option><option value="+994">+994</option><option value="+995">+995</option><option value="+996">+996</option><option value="+998">+998</option></select>
        <input id="customerMobile" name="customerMobile" class="form--order-input" value="" data-bind="attr: { placeholder: order.customer.mobilePlaceholder }" placeholder="" type="text" />
    </div>
    <div class="form--owner-type">
        <p class="chosereg"><em>Will the owner of the domain be the same as entered above?</em></p>
        <p class="choice">
            <input name="registrantCustomer" value="true" checked="checked" id="ownerIdenticalYes" type="radio" />
            <label for="ownerIdenticalYes" id="ownerIdenticalYesLabel"><span></span>Yes</label>
            <input name="registrantCustomer" value="false" id="ownerIdenticalNo" type="radio" />
            <label for="ownerIdenticalNo" id="ownerIdenticalNoLabel"><span></span>No</label>
        </p>
    </div>
`

let customerExistInputs = `
    <div class="formFields">
            <div style="float: left;"
                <label for="customerEmail" class="labelUsername" style="">
                    Email (username):
                </label>
            </div>
            <label for="customerEmail" class="labelEmail" style="display: none;">Email:</label>
            <div style="width: 460px;">
                <input autocomplete="on" autocapitalize="off" class="border" id="customerEmail" name="customerEmail" value="" type="email">
            </div>
        

        <div class="adminUserPasswordContainer" style="">
                <div style="float: left;">
                    <label for="adminUserPassword">Password:</label>
                </div>
                
                <div style="width: 460px;">
                    <input name="adminUserPassword" id="adminUserPassword" class="border" autocomplete="off" type="password">
                </div>
            <p>
                <small class="text-italic">Enter your email address and your control panel password. The email address is the contact email address you entered for your web spaces.</small>
            </p>
        </div>
    </div>
    <div id="" class="mg-top-15">
        <div class="forgotpassword" style="position: absolute; bottom: 30px;">
            <a href="/admin/forgotpassword.do?locale=en" target="_blank">Forgot your password?</a>
        </div>
    </div>
`

const basketSidebar = `
    <div class="order--summary-sidebar">
      <h3>Your basket</h3>
      <span><a href="">Edit</a></span>
      <div class="order--summary-list">

      </div>
    </div>
`

const checkoutTerms = `
    <div class="order--checkout-terms">
        <h3>DK Hostmaster's conditions</h3>
        <em> Please be aware of the following conditions: </em>
        <p> The registration of the domain name takes place with DK Hostmaster with whom One.com has entered into an agreement. You must must therefore accept to be subject to DK Hostmaster’s applicable rules on assignment, registration and administration of .dk domain names (the General Conditions).
            <br/ style="margin-bottom: 20px;">
            In order for a domain name to be registered, DK Hostmaster must be able to validate your information.
            <br/ style="margin-bottom: 20px;">
            If you are a resident of Denmark, you may be compelled to inform DK Hostmaster of your civil registration (CPR) number and to use NemID in order to be validated.
            <br/ style="margin-bottom: 20px;">
            In the validation process, legal persons will be asked to provide the specific and unique information as described in DK Hostmaster’s General Conditions and validation procedures.
            <br/ style="margin-bottom: 20px;">
            DK Hostmaster is entitled to reject your application and registration of a domain name if DK Hostmaster is unable to validate your information.
            <br/ style="margin-bottom: 20px;">
            The information you have submitted is registered by DK Hostmaster and will be used for administering the .dk top-level domain. The information will be made publicly available via the whois database published by DK Hostmaster, unless you fulfil the anonymity requirements of the whois database. You can read the anonymity requirements in 7.2 of DK Hostmaster’s General Conditions
        </p>

        <div class="order--terms-agree">
            <input id="checkoutTerms"type="checkbox">
            <label for="checkoutTerms"><span></span><span class="domain-label">I agree that the domain will be registered with DK Hostmaster, and I accept DK Hostmaster’s General conditions for the assignment, registration and administration of .dk domain names.</span>
            </label>
        </div>
    </div>
    <div class="order--checkout-sidepanel">
        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/guarantee.png"/>
                </div>
                <h2>Risk free 15 days</h2>
                <p>Money Back Guarantee</p>
            </div>
        </div>
        
        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/customers.png"/>
                </div>
                <h2>More than 1,500,000</h2>
                <p>active customers</p>
            </div>
        </div>

        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/trustpilot.png"/>
                </div>
                <h2 class="bold">"Great service"</h2>
                <img src="dist/images/onecom/sprite-source/trustpilot-logo.svg">
            </div>
        </div>

        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/support.png"/>
                </div>
                <h2>We're open</h2>
                <p>24 hours a day</p>
            </div>
        </div>
    </div>
`

const checkoutPay = `
    <div class="order--checkout-pay">
        <h3>Checkout</h3>
    
        <div class="term--checkbox-wrapper">
          <input id="checkoutTerms"type="checkbox">
          <label for="checkoutTerms"><span></span><span style="font-weight: bold;" class="domain-label">I agree to below terms:</span>
          </label>
          <p>Yes, I have read the terms of business and I agree to these!</p>
          <p>The domain will be registered with One.com, and I accept the Domain Registration Agreement. </p>
        </div>
        <hr/>
        <div class="checkout--payment-options">
            <p class="radio-paragraph">
                <input name="customerDataTicket" id="checkoutCard" value="false" checked="" type="radio" />
                <label for="checkoutCard" class="radioLabel">
                    <span></span> Credit/debit card (MasterCard and VISA)
                </label>
            </p>
            <p class="radio-paragraph">
                <input name="customerDataTicket" id="checkoutLogin" value="true" type="radio" />
                <label for="checkoutLogin" class="radioLabel">
                    <span></span> Existing customer
                </label>
            </p>
            <p class="radio-paragraph">
                <input name="customerDataTicket" id="checkoutPaypal" value="true" type="radio" />
                <label for="checkoutPaypal" class="radioLabel">
                    <span></span> Paypal
                </label>
            </p>
        </div>
    </div>
    <div class="order--checkout-sidepanel">
        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/guarantee.png"/>
                </div>
                <h2>Risk free 15 days</h2>
                <p>Money Back Guarantee</p>
            </div>
        </div>
        
        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/customers.png"/>
                </div>
                <h2>More than 1,500,000</h2>
                <p>active customers</p>
            </div>
        </div>

        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/trustpilot.png"/>
                </div>
                <h2 class="bold">"Great service"</h2>
                <img src="dist/images/onecom/sprite-source/trustpilot-logo.svg">
            </div>
        </div>

        <div class="sidepanel--item">
            <div>
                <div class="icon">
                    <img src="dist/images/signup/support.png"/>
                </div>
                <h2>We're open</h2>
                <p>24 hours a day</p>
            </div>
        </div>
    </div>
    <div class="checkout--order-summary">
        <p>We care about the safety of your mail, contacts and website. That’s why we automatically renew your web space and debit your credit card when due. You can cancel at any time.</p>
        <div class="checkout--order-confirmation">
            <h3>Order confirmation</h3>

        </div>
        <div class="checkout--customer-info">

        </div>
    </div>
`

const checkoutCompleted = `
    <div class="checkout--order-complete">
        <h3>Thank you for choosing one.com</h3>
        <em>Next up you need to activate your order</em>
        <p>1. We sent you a link for the activation page to kasperforup@gmail.com</p>
        <p>2. On the activation page you need to enter the activation code, that we just sent by SMS to +45 42700001.</p>
        <p>That’s it! When you have entered the activation code, we will start processing your order.</p>
    </div>
    <p>If you have not received the SMS message, you can submit a signed form. Further information can be found on the activation page.</p>
    <hr/>
    <p class="checkout--order-invoice">Invoice for order number 1333337 will be sent to kasperforup@gmail.com.</p>
    <div class="promo--share-link">
        <h3>Give $10, Get $25 – Unlimited earnings!</h3>
        <p>Everyone you refer to One.com, will get a $10 discount on a hosting package – and for each you refer, you will earn $25 – there is no limit to how much you can make.</p>
        <p>Share your unique referral link below, and for each referral that sign up through your link, you’ll get $25.</p>
        <hr/>
        <h3>Share your personal link</h3>
        <p>Spread the love and discounts using the links below, and start earning!</p>
        <h3>Your referral link:</h3><span class="share--link-url">http://one.me/enaqydpe</span>
        <div class="share--link-social">
            <button>Facebook</button>
            <button>Twitter</button>
            <button>Email</button>
        <div>
    </div>
`

// BASKET - Initial Order List 

const orderBasket = [
    {
        domain: "forup.dk",
        package: "Starter",
        addons: [],
        price: 0
    },
    {
        domain: "forup.one",
        package: "Professional Plus",
        addons: [],
        price: 0
    },
    {
        domain: "forup.org",
        package: "Business",
        addons: [],
        price: 0
    }
]

// ORDER STEPS - Navigation sticky

const scrollStream = Rx.Observable.fromEvent(window, 'scroll');

scrollStream.debounceTime(10).subscribe( (value) => {
    // console.log(value, "value Y")
    // console.log(document.body.scrollTop, "Chrome Y")
    let stickyNav = document.querySelector('#nav--order-steps');
    if(value.pageY >= 150 || document.body.scrollTop >= 150 ){
        stickyNav.classList.add('fixed')
        // console.log(stickyNav)
    } else {
        stickyNav.classList.remove('fixed')
    }
})

// BASKET - Add/Remove Order in Basket


// Add order & extra add-ons
const addExtraStream = Rx.Observable.fromEvent(document.querySelectorAll('.order--extra-select'), 'click');
const addDomainStream = Rx.Observable.fromEvent(document.querySelectorAll('.order--domain-select'), 'click');

const subject = new Rx.Subject(orderBasket);

addExtraStream.subscribe( (event) => { 

        for(i in orderBasket) {
        // subject.next(orderBasket[i].addons.push(event.target.value))
        orderBasket[i].addons.push(event.target.value)
        }
    
    basketLoader()
})


const orderStepsNext = Rx.Observable.fromEvent(document.querySelectorAll('.order--steps-next'), 'click');
const orderStepsPrev = Rx.Observable.fromEvent(document.querySelectorAll('.order--steps-prev'), 'click');

var inc = orderStepsNext.map( () => state => Object.assign({}, state, {count: state.count + 1 }) )
var dec = orderStepsPrev.map( () => state => Object.assign({}, state, {count: state.count - 1 }) )

var state = Rx.Observable.merge(inc, dec).scan((state, changeFn) => changeFn(state), {count: 0});

state.subscribe( (state) => {

    switch(state.count) {
        case 0:
            document.querySelector('.order--step-content').innerHTML = "Product Page";
            
            let orderNavProduct = document.querySelectorAll('.order--steps-nav > div')
            orderNavProduct.forEach( el => {
                let key = el.className.split(' ')[0] == 'order--step-product';
                
                if (key) {
                    console.log(el, true)
                    el.classList.remove('step-inactive')
                    el.classList.add('step-active')
                } else {
                    console.log(el, false)
                    el.classList.remove('step-active')
                    el.classList.add('step-inactive')
                }
            })
            break;
        case 1:
            document.querySelector('#customer--ctrl-action').style.display = "block";
            document.querySelector('.order--step-content').innerHTML = customerRegFormNew + basketSidebar;
            
            let customerType = Rx.Observable.fromEvent(document.querySelectorAll('input[name="customerDataTicket"]'), 'click');
            customerType.subscribe( (event) => {
            
                let ctrl = document.querySelector('#customer--ctrl-action');
                let btnNext = document.querySelector('#customer--ctrl-next > button');
                let btnPrev = document.querySelector('#customer--ctrl-prev > button');

                let el = event.target.form.lastElementChild;
                if (event.target.value == 'true') {
                    el.innerHTML = customerExistInputs
                    ctrl.style.bottom = '180px';
                    btnNext.innerHTML = "Sign in"
                } else {
                    el.innerHTML = customerNewInputs
                    ctrl.style.bottom = '0';
                    btnNext.innerHTML = "Continue"
                } 

            })
            let orderNavCustomer = document.querySelectorAll('.order--steps-nav > div')
            orderNavCustomer.forEach( el => {
                let key = el.className.split(' ')[0] == 'order--step-customer';
                
                if (key) {
                    console.log(el, true)
                    el.classList.remove('step-inactive')
                    el.classList.add('step-active')
                } else {
                    console.log(el, false)
                    el.classList.remove('step-active')
                    el.classList.add('step-inactive')
                }
            })
            basketSidebarLoader()
            break;
        case 2:
            document.querySelector('.order--step-content').innerHTML = checkoutTerms;
            
            let orderNavCheckout = document.querySelectorAll('.order--steps-nav > div')
            orderNavCheckout.forEach( el => {
                let key = el.className.split(' ')[0] == 'order--step-checkout';
                
                if (key) {
                    console.log(el, true)
                    el.classList.remove('step-inactive')
                    el.classList.add('step-active')
                } else {
                    console.log(el, false)
                    el.classList.remove('step-active')
                    el.classList.add('step-inactive')
                }
            })
            break;
        case 3:
            document.querySelector('.order--step-content').innerHTML = checkoutPay;
            
            let orderNavCheckoutA = document.querySelectorAll('.order--steps-nav > div')
            orderNavCheckoutA.forEach( el => {
                let key = el.className.split(' ')[0] == 'order--step-checkout';
                
                if (key) {
                    console.log(el, true)
                    el.classList.remove('step-inactive')
                    el.classList.add('step-active')
                } else {
                    console.log(el, false)
                    el.classList.remove('step-active')
                    el.classList.add('step-inactive')
                }
            })
            break;
        case 4:
            document.querySelector('.order--step-content').innerHTML = checkoutCompleted;
            
            let orderNavCompleted = document.querySelectorAll('.order--steps-nav > div')
            orderNavCompleted.forEach( el => {
                let key = el.className.split(' ')[0] == 'order--step-completed';
                
                if (key) {
                    console.log(el, true)
                    el.classList.remove('step-inactive')
                    el.classList.add('step-active')
                } else {
                    console.log(el, false)
                    el.classList.remove('step-active')
                    el.classList.add('step-inactive')
                }
            })
            break; 
        case 5:
            document.querySelector('.order--step-content').innerHTML = 'CUSTOMER INFO';
            break;
        default:
            alert('exit!')
    }
})

// BASKET - Info domain list

function basketLoader() {
    let productList = document.querySelector('#order--domain-list');

    productList.innerHTML = orderBasket.map( (order) => `
        <div class="buycustomer__addon__domain">
            <input id="${order.domain}" checked="checked" type="checkbox">
            <label for="${order.domain}"><span></span><span class="domain-label">${order.domain}</span>
                <span class="right">
                    <span class="price-label">
                        <div class="current-package product-hosting-bg active">
                            <span>${order.package}</span>
                            <span class="package--selector">▾</span>
                        </div>
                    </span>
                </span>
            </label>

            <span class="order--details-feat">Hosting Starter (25 GB) - 12 months   <em>240.00</em></span>
            <span class="order--details-feat">Domain fee - first 12 months (.cc)  <em>150.00</em></span>
            <span class="order--details-feat">Setup fee   <em>115.00</em></span>
            
            <input id="${order.domain}Privacy" name="${order.domain}Privacy" type="checkbox">
            <label for="${order.domain}Privacy" class="addon--info-wrapper">
            <span class="addon--privacy-checkbox"></span>
            <span class="domain-label">Domain Privacy - 12 months</span>
            <em class="addon--privacy-info">Your personal information are not protected!</em>
            </label>
            <div class="order--addons-list">
                ${order.addons.map( (service) => `
                    <input id="${order.domain}${service}" name="${order.domain}${service}" type="checkbox" checked="checked" />
                    <label for="${order.domain}${service}" class="addon--info-wrapper" style="margin-top: -10px;">
                    <span class="addon--extra-checkbox"></span>
                    <span class="domain-label">${service} - 12 Months</span>
                    </label>
                ` ).join(' ') }
            </div>
        </div>
        `
    ).join(' ')

    const domainPrivacyClick = Rx.Observable.fromEvent(document.querySelectorAll('.addon--privacy-checkbox'), 'click');

    domainPrivacyClick
        .map(e => {
            if (e.target.nextElementSibling.nextElementSibling.innerHTML == 'Your personal information are not protected!') {
                e.target.nextElementSibling.nextElementSibling.innerHTML = 'Your personal information will be protected!';
                e.target.nextElementSibling.nextElementSibling.classList.add('addedPrivacy')

            } else {
                e.target.nextElementSibling.nextElementSibling.innerHTML = 'Your personal information are not protected!'
                e.target.nextElementSibling.nextElementSibling.classList.remove('addedPrivacy')
            }
        })
        .pairwise()
        .subscribe( pair => console.log(pair) )
}

basketLoader()

function basketSidebarLoader() {
    let summaryList = document.querySelector('.order--summary-list');

    summaryList.innerHTML = orderBasket.map( (order) => `
        <div class=".order--summary-item">
            <input id="${order.domain}" checked="checked" type="checkbox">
            <label for="${order.domain}"><span></span><span class="domain-label">${order.domain}</span>
            </label>
            <span class="order--details-feat">Hosting Starter (25 GB)</span>
            <span class="order--details-feat">Domain fee</span>
            <span class="order--details-feat">Setup fee</span>
            ${order.addons.map( (service) => `
            <span class="order--details-feat">${service}</span>
            ` ).join(' ') }
            <hr>
            
        </div>
    `).join(' ')
}