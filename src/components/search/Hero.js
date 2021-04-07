import React, { useState } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function SearchNavbar() {
  const [search, setSearch] = useState("");
  return (
    <>
      <main className="_main">
        <div class="L3eUgb">
          <Navbar />
          <div class="o3j99 LLD4me yr19Zb LS8OJ">
            <div class="k1zIA rSk4se">
              <img
                class="lnXdpd"
                alt="Google"
                height="92"
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                srcset="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                width="272"
              />
            </div>
          </div>
          <div class="o3j99 ikrT4e om7nvf">
            <dialog class="spch-dlg" id="spch-dlg">
              <div
                class="spch s2fp-h"
                style={{ display: "none" }}
                id="spch"
              ></div>
            </dialog>
            <form
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div jsmodel="vWNDde" jsdata="MuIEvd;_;CoLw3E">
                <div
                  jscontroller="mvYTse"
                  jsmodel="TMlYFc"
                  class="A8SBwf"
                  jsdata="LVplcb;_;"
                  jsaction="lX6RWd:w3Wsmc;DkpM0b:d3sQLd;IQOavd:dFyQEf;XzZZPe:jI3wzf;Aghsf:AVsnlb;iHd9U:Q7Cnrc;f5hEHe:G0jgYd;vmxUb:j3bJnb;R2c5O:LuRugf;R3Yrj:DURTdb;qiCkJd:ANdidc;NOg9L:HLgh3;uGoIkd:epUokb;zLdLw:eaGBS;rcuQ6b:npT2md"
                >
                  <div class="RNNXgb" jsname="RNNXgb">
                    <div class="SDkEP">
                      <div class="iblpc" jsname="uFMOof">
                        <div class="hsuHs">
                          <span class="wFncld z1asCe MZy1Rb">
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewbox="0 0 24 24"
                            >
                              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div
                        jscontroller="iDPoPb"
                        class="a4bIc"
                        jsname="gLFyf"
                        jsaction="h5M12e;input:d3sQLd;blur:jI3wzf"
                      >
                        <div class="pR49Ae gsfi" jsname="vdLsw"></div>
                        <input
                          class="gLFyf gsfi"
                          jsaction="paste:puy29d;"
                          maxlength="2048"
                          name="q"
                          type="text"
                          aria-autocomplete="both"
                          aria-haspopup="false"
                          autocapitalize="off"
                          autocomplete="off"
                          autocorrect="off"
                          autofocus=""
                          role="combobox"
                          spellcheck="false"
                          title="Search"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          aria-label="Search"
                        />
                      </div>
                      <div class="dRYYxd">
                        <div
                          jscontroller="J5Ptqf"
                          class="clear-button"
                          jsname="RP0xob"
                          aria-label="Clear"
                          role="button"
                          jsaction="AVsnlb;rcuQ6b:npT2md"
                          data-ved="0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Q05YFCAU"
                        >
                          <span
                            class="lBbtTb z1asCe rzyADb"
                            jsname="itVqKe"
                            tabindex="0"
                          >
                            <svg
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewbox="0 0 24 24"
                            >
                              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                          </span>
                          <span class="FqnKTc"></span>
                        </div>
                        <div
                          jscontroller="MC8mtf"
                          class="hpuQDe"
                          aria-label="Search by voice"
                          role="button"
                          tabindex="0"
                          jsaction="h5M12e;rcuQ6b:npT2md"
                          data-ved="0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Qvs8DCAY"
                        >
                          <svg
                            class="HPVvwb"
                            focusable="false"
                            viewbox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                              fill="#4285f4"
                            ></path>
                            <path
                              d="m11 18.08h2v3.92h-2z"
                              fill="#34a853"
                            ></path>
                            <path
                              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                              fill="#f4b400"
                            ></path>
                            <path
                              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                              fill="#ea4335"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    jscontroller="tg8oTe"
                    class="UUbT9"
                    style={{ display: "none" }}
                    jsname="UUbT9"
                    jsaction="mouseout:ItzDCd;mouseleave:MWfikb;hBEIVb:nUZ9le;YMFC3:VKssTb"
                  >
                    <div class="RjPuVb" jsname="RjPuVb"></div>
                    <div class="aajZCb" jsname="aajZCb">
                      <div class="xtSCL"></div>
                      <ul class="erkvQe" jsname="erkvQe" role="listbox"></ul>
                      <li class="ynRric" id="ynRric" role="presentation"></li>
                      <li
                        data-view-type="1"
                        class="sbct"
                        id="sbt"
                        role="presentation"
                      >
                        <div class="L3OrEb">
                          <div class="sbic"></div>
                          <div class="sbtc" role="option">
                            <div class="sbl1">
                              <span></span>
                            </div>
                            <div class="sbl2">
                              <span></span>
                            </div>
                          </div>
                          <div class="sbab">
                            <div class="sbai">Remove</div>
                          </div>
                        </div>
                      </li>
                      <div jsname="VlcLAe" class="tfB0Bf">
                        <center>
                          <input
                            class="gNO89b"
                            value="Google Search"
                            aria-label="Google Search"
                            type="submit"
                          />
                          <input
                            class="RNmpXc"
                            value="I'm Feeling Lucky"
                            aria-label="I'm Feeling Lucky"
                            name="btnI"
                            type="submit"
                            jsaction="trigger.kWlxhc"
                            data-ved="0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Q19QECAg"
                          />
                        </center>
                      </div>
                    </div>
                    <div
                      jsname="JUypV"
                      jscontroller="IvlUe"
                      class="JUypV"
                      data-async-context="async_id:duf3-46;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:46"
                    >
                      <div
                        jscontroller="xz7cCd"
                        style={{ display: "none" }}
                        jsaction="rcuQ6b:npT2md"
                      ></div>
                      <div
                        id="duf3-46"
                        data-jiis="up"
                        data-async-type="duffy3"
                        data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form"
                        class="yp"
                        data-ved="0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Q-0EICQ"
                      ></div>
                      <a
                        class="oBa0Fe wrSo4 aciXEb"
                        href="#"
                        id="sbfblt"
                        data-async-trigger="duf3-46"
                        jsaction="trigger.szjOR"
                        data-ved="0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Qtw8ICg"
                      >
                        Report inappropriate predictions
                      </a>
                    </div>
                  </div>
                  <div class="FPdoLc tfB0Bf">
                    <center>
                      <input
                        class="gNO89b"
                        value="Google Search"
                        aria-label="Google Search"
                        name="btnK"
                        type="submit"
                        data-ved="0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Q4dUDCAs"
                      />
                      <input
                        class="RNmpXc"
                        value="I'm Feeling Lucky"
                        aria-label="I'm Feeling Lucky"
                        name="btnI"
                        type="submit"
                        jsaction="trigger.kWlxhc"
                        data-ved="0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Q19QECAw"
                      />
                    </center>
                  </div>
                </div>
              </div>
              <div id="tophf">
                <input name="source" type="hidden" value="hp" />
                <input value="d55tYPblAYHeav6pm_gC" name="ei" type="hidden" />
                <input
                  value="AINFCbYAAAAAYG2shwpAeUMskCxILDagtJUo86hQAM7a"
                  name="iflsig"
                  type="hidden"
                />
              </div>
            </form>
          </div>
          <div class="o3j99 qarstb">
            <div
              class="vcVZ7d"
              id="gws-output-pages-elements-homepage_additional_languages__als"
            >
              <div id="SIvCob">
                Google offered in:{" "}
                <a href="https://www.google.com/setprefs?sig=0_DlbLD1v2dNI9D7ojtORrcuHUbUk%3D&amp;hl=ka&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwi2_e65iuzvAhUBrxoKHf7UBi8Q2ZgBCA4">
                  ქართული
                </a>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <div class="Fgvgjc">
          <div class="gTMtLb fp-nh" id="lb"></div>
          <div style={{ display: "none" }}></div>
          <span style={{ display: "none" }}>
            <span style={{ display: "none" }}></span>
          </span>
        </div>
      </main>
      <div className="res">
        <img
          class="lnXdpd"
          alt="Google"
          height="62"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          srcset="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          width="152"
        />
        <h1
          style={{
            color: "#666",
            fontSize: "18px",
            marginTop: "20px",
            userSelect: "none",
          }}
        >
          Responsive not available
        </h1>
      </div>
    </>
  );
}
