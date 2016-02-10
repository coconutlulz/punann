(function() {
    angular.module('punann', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'pascalprecht.translate'])
        .config(['$logProvider', '$stateProvider', '$translateProvider', '$urlRouterProvider', function($logProvider, $stateProvider, $translateProvider, $urlRouterProvider) {
            var english = {
                MENU:
                {
                    SYNOPSIS: 'Synopsis',
                    INTERESTS: 'Interests',
                    EXPERIENCE: 'Experience',
                    EDUCATION: 'Education',
                    CONTACT: 'Contact',
                    BLOG: 'Blog'
                },
                SYNOPSIS:
                {
                    WHY: 'Why me?',
                    P1: 'My name is David and I reside in Dublin, Ireland, working independently as a software engineering contractor.',
                    P2: 'I have a proven record as a network engineer, a system administrator, an intern, a junior developer, a senior developer and a contractor. My industry experience ranges from small companies providing services to local clients; to start-ups; to trans-national giants of the games industry, working on the technology that powers AAA titles; to voluntary contributions to free software projects.',
                    P3: 'I am completely honest about all aspects of my professional life. My goal is to please you with my work, not with unrealistic expectations.',
                    P4: 'I will always use a proven technology if it means increased speed, reliability or security. I pride myself on a strictly evidenced-based, rational philosophy, which means that I will work around limitations instead of letting them slow me down.',
                    P5: 'My communication skills are excellent and I provide clear, concise explanations of problems and proposed solutions. My documentation - which I supply as standard with all work - is thorough and easy to read: jargon is always explained and buzz-words are always excluded.',
                    P6: 'Fees and time are flexible. I keep an eye on market rates and make every effort to put myself ahead of the competition.',
                    SKILLS:
                    {
                        HEADING: 'Skills',
                        DEV:
                        {
                            HEADING: 'Development',
                            SUB: 'Full-Stack',
                            SECTION1: 'Languages, Frameworks and Libraries',
                        },
                        OPS:
                        {
                            HEADING: 'Operations',
                            SUB: 'System Administration and Network Engineering',
                            SECTION1: 'Operating Systems',
                            SECTION2: 'Services',
                            SECTION3: 'Networking',
                            SECTION4: 'Security'
                        },
                        OTHER:
                        {
                            HEADING: 'Related',
                            TECHWRITING: 'Technical Writing'
                        },
                        LANGUAGES:
                        {
                            HEADING: 'Languages',
                            ENGLISH:
                            {
                                HEADING: 'English',
                                LEVEL: 'C2 - Native'
                            },
                            IRISH:
                            {   
                                HEADING: 'Irish',
                                LEVEL: 'B2 - Upper intermediate'
                            },
                            FINNISH:
                            {
                                HEADING: 'Finnish',
                                LEVEL: 'A1 - Beginner'
                            }
                        }
                    }
                },
                INTERESTS:
                {
                    COMPUTERS:
                    {
                        HEADING: 'Computers',
                        TEXT: 'I\'ve been using computers since the Intel 386 and love tinkering with them. C++ was my first language and it naturally baffled me. Almost two decades later and it still does from time to time; that\'s its nature.'
                    },
                    MUSIC:
                    {
                        HEADING: 'Music',
                        TEXT: 'Music is very important to me; it is an emotional rollercoaster and source of comfort, inspiration, relaxation and excitement. I received my first guitar at the age of 13 and was immediately captivated. Having played in several <a href="https://coloursystemfailure.bandcamp.com">bands</a>, I now jam occasionally with a group of musicians in Dublin. Unfortunately, I don\'t have the time to go back on the road in any meaningful sense - at least for now.'
                    },
                    SCIENCE:
                    {
                        HEADING: 'Science',
                        TEXT: 'I have a great interest in science, particularly organic chemistry and pharmacology. In fact, I am so intrigued by them that a second degree is almost within my grasp. Physics and cosmology are great, too, but maths has never been a great skill of mine. Exploring the world of science has made me a better person by granting me an understanding of the importance of falsifiability, evidence and critical thinking.'
                    },
                    LANGUAGES:
                    {
                        HEADING: 'Languages',
                        TEXT: 'For most of my life, I only had one language. Then, there were two. Now, I\'m trying for a third. Gaelic and Nordic languages are of particular interest, as it etymology. It\'s amazing how words leak between languages and how similar linguistic evolution is to that of life. This overlaps with my interest in computer science and computational linguistics. You can find me on <a href="https://www.duolingo.com/coconutlulz">Duolingo</a> and <a href="http://www.memrise.com/user/coconutlulz/">Memrise</a>.'
                    },
                    CYCLING:
                    {
                        HEADING: 'Cycling',
                        TEXT: 'Love it. That\'s all.'
                    }
                },
                EXPERIENCE:
                {
                    PROFESSIONAL:
                    {
                        HEADING: 'Professional',
                        AL:
                        {
                            TITLE: 'Software Engineer (Full-Stack) and System Administrator',
                            DATERANGE: 'October 2015 to present',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Provide software engineering and system administration services to external clients. Technologies vary by client.'
                            }
                        },
                        TAILIFY:
                        {
                            TITLE: 'Senior Software Engineer (Back-End) and System Administrator',
                            DATERANGE: 'October 2014 to October 2015',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Software architect and senior developer for all of Tailify\'s back-end services and social media interfaces, including test suites.',
                                DESCRIPTION2: 'Database design, administration and back-ups.',
                                DESCRIPTION3: 'Design and maintenance of fault-tolerant, scalable infrastructure that is capable of handling massive volumes of data.',
                                DESCRIPTION4: 'RESTful and non-RESTful API development; remote task management.',
                                DESCRIPTION5: 'Maintenance of internal services.',
                                DESCRIPTION6: 'Internal security policy and enforcement.',
                                DESCRIPTION7: 'Thorough documentation.'
                            }
                        },
                        DW:
                        {
                            TITLE: 'Junior Software Engineer',
                            DATERANGE: 'September 2012 to September 2014',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Development and maintenance of online services, including: lobby services, match-making, cheat detection, data storage etc.',
                                DESCRIPTION2: 'Development and maintenance of client-side library for Demonware services.',
                                DESCRIPTION3: 'Leading an investigation into the replacement of a key proprietary technology with a free/libre alternative.',
                                DESCRIPTION4: 'Build engineering: automated building and testing.',
                                DESCRIPTION5: 'Documentation: installation guides, run-books for SREs.'
                            }
                        },
                        KERNA:
                        {
                            TITLE: 'Network and Security Engineer',
                            DATERANGE: 'September 2010 to May 2012',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Network engineering.',
                                DESCRIPTION2: 'Formulation and maintenance of security policies for external clients.',
                                DESCRIPTION3: 'Monitoring, intrusion detection, auditing, diagnostics.',
                                DESCRIPTION4: 'System administration.',
                                DESCRIPTION5: 'Web hosting.',
                                DESCRIPTION6: 'E-mail hosting, spam filtering, virus detection.',
                                DESCRIPTION7: 'DNS hosting and configuration.',
                                DESCRIPTION8: 'Interacting with a high volume of customers; mostly via phone and e-mail, but with on-site visits to offices, server rooms and data centres.'
                            }
                        },
                        STREAM:
                        {
                            TITLE: 'Eircom ADSL Technical Support Agent',
                            DATERANGE: 'April 2008 to May 2008'
                        },
                        SBS:
                        {
                            TITLE: 'IT Department Contractor',
                            DATERANGE: 'July 2005 to September 2005; July 2006'
                        }
                    },
                    VOLUNTARY:
                    {
                        HEADING: 'Voluntary',
                        FSTRANSLATOR:
                        {
                            ORGANISATION: 'Free Software',
                            TITLE: 'English to Irish Translator',
                            DATERANGE: 'September 2015 to present',
                            DUTIES:
                            {
                                DESCRIPTION1: '<a href="https://www.transifex.com/gnumdk/lollypop/">Lollypop</a> music player',
                                DESCRIPTION2: '<a href="https://www.transifex.com/yaron/vlc-trans/">VLC media player</a>'
                            }
                        },
                        FS:
                        {
                            ORGANISATION: 'Free Software',
                            TITLE: 'Software Developer',
                            DATERANGE: 'October 2015 to present',
                            DUTIES:
                            {
                                DESCRIPTION1: '<a href="https://github.com/clementine-player">Clementine music player</a>'
                            }
                        },
                        RBADMIN:
                        {
                            ORGANISATION: 'RedBrick - Dublin City University Networking Society',
                            TITLE: 'System Administrator (Committee Member)',
                            DATERANGE: 'September 2009 to February 2010',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Maintenance of the society\'s systems, including IRC, web hosting, e-mail, storage and image gallery.',
                                DESCRIPTION2: 'Attendance at committee meetings and running of the society\'s daily affairs.'
                            }
                        }
                    }
                },
                EDUCATION:
                {
                    FORMAL:
                    {
                        HEADING: 'Formal',
                        OU:
                        {
                            INSTITUTION: 'The Open University',
                            TITLE: 'BSc. (Hons.) in Natural Sciences (Chemistry)',
                            DATERANGE: '2011 to 2018 (estimated)',
                            GRADE: 'Distinction',
                            GRADEDESCRIPTION: '(Latest)',
                            NOTES: ''
                        },
                        DCU:
                        {
                            INSTITUTION: 'Dublin City University',
                            TITLE: 'BSc. (Hons.) in Computer Applications (Software Engineering)',
                            DATERANGE: '2005 to 2010',
                            GRADE: '2.1',
                            GRADEDESCRIPTION: 'Higher second-class honours',
                            NOTES: ''
                        },
                        LC:
                        {
                            INSTITUTION: 'Coolmine Community School, Clonsilla, Dublin 15',
                            TITLE: 'Leaving Certificate',
                            DATERANGE: '2000 to 2005',
                            GRADEDESCRIPTION: '',
                            NOTES: ''
                        }

                    },
                    INFORMAL:
                    {
                        HEADING: 'Informal',
                        CNAG:
                        {
                            INSTITUTION: 'The Gaelic League',
                            TITLE1: 'Irish Language - Higher Level 1',
                            TITLE2: 'Irish Language - Medium Level 2',
                            TITLE3: 'Irish Language - Medium Level 1',
                            DATERANGE1: 'January to March, 2015',
                            DATERANGE2: 'April to June, 2015',
                            DATERANGE3: 'September to November, 2015',
                            NOTES: ''
                        }
                    }
                },
                CONTACT:
                {
                    EMAIL: 'E-mail'
                }
            };

            var irish = {
                MENU:
                {
                    SYNOPSIS: 'Achoimre',
                    INTERESTS: 'Suimeanna agus Caitheamh Aimsire',
                    EXPERIENCE: 'Taithí',
                    EDUCATION: 'Oideachas',
                    CONTACT: 'Teagmháil',
                    BLOG: 'Blag'
                },
                SYNOPSIS:
                {
                    WHY: 'Cén fáth gur mise an t-innealtóir a roghnófá?',
                    P1: 'Is mise David agus is as Áth Cliath dom, ag obair mar innealtóir bogearraí neamhspleách.',
                    P2: 'Tá sé cruthaithe agam go bhfuil ag éirí liom mar innealtóir líonra, riarthóir córas, intéirneach, fhorbróir sóisearach, ard-fhorbróir agus oibrí ar conradh. Baineann mo thaithí tionscail le comhlachtaí beaga ag cur seirbhísí do chliaint áitiúla; le gnólachtaí nuathionscanta; le comhlachtaí trasnáisiúnta de thionscal na gcluichí ríomhaireachta, ag obair ar theicneolaíocht a sholáthraíonn chumhacht do chluichí AAA; le síntiúis do shaorearraí.',
                    P3: 'Táim macánta go hiomlán um m\'obair. Is é mo chuspóir é go raibh tú sásta le mo chuid oibre, gan torthaí níos measa ná mar a cheap tú a bheadh.',
                    P4: 'Bíonn teicneolaíocht chruthaithe i bhfeidhm agam le haghaidh luais, iontaofachta nó slándála níos mó. Táim bródúil as fealsúnacht bhunaithe ar fhianaise le hobair thart ar fhadhbanna.',
                    P5: 'Tá cumais cumarsáide iontacha agam. Cuirim míniúcháin sholéire  ar fail de réitigh molta. Is iomlána mo cháipéisí teichneolaíochta ar fáil go bunúsach atá in éineacht le gach cuid oibre a bhíonn déanta agam. Míním téarma teicneolaíochta agus fágtar focail reatha as.',
                    P6: 'Tá mo thaillí agus m\'am solúbtha. Breathnaím ar thaillí margaidh chun an ceann is fearr a fháil ar an iomaíocht.',
                    SKILLS:
                    {
                        HEADING: 'Cumas Teicniúla',
                        DEV:
                        {
                            HEADING: 'Forbairt Bogearraí',
                            SUB: 'Lán-Chruacha',
                            SECTION1: 'Teangacha, Creatlacha agus Leabharlanna',
                        },
                        OPS:
                        {
                            HEADING: 'Feidhmiú',
                            SUB: 'Riarachán Córas agus Innealtóireacht Líonra',
                            SECTION1: 'Córais Oibriúchán',
                            SECTION2: 'Seirbhísí',
                            SECTION3: 'Líonrú',
                            SECTION4: 'Slándáil'
                        },
                        OTHER:
                        {
                            HEADING: 'Ceangailte',
                            TECHWRITING: 'Scríbhneoireacht Teicniúil'
                        },
                        LANGUAGES:
                        {
                            HEADING: 'Languages',
                            ENGLISH:
                            {
                                HEADING: 'English',
                                LEVEL: 'C2 - Dúchasach'
                            },
                            IRISH:
                            {   
                                HEADING: 'Irish',
                                LEVEL: 'B2 - Ard-idirmheánach'
                            },
                            FINNISH:
                            {
                                HEADING: 'Finnish',
                                LEVEL: 'A1 - Tosaitheoir'
                            }
                        }

                    }
                },
                INTERESTS:
                {
                    COMPUTERS:
                    {
                        HEADING: 'Ríomhairí',
                        TEXT: 'Tosaíodh ríomhairí i bhfeidhm liom leis an Intel 386 agus is aoibhinn liom leo a thincéireacht. B\'í C++ mo chéad teanga ríomaireachta í; ar ndóigh, chuir sí mearbhall orm. Beagnach scór bliain níos déanaí agus is céanna é an scéal fós - cuid bhunúsach di atá ann sin.'
                    },
                    MUSIC:
                    {
                        HEADING: 'Ceol',
                        TEXT: 'Tá mó chroí istigh sa cheol. Soláthraíonn sé só, spreagadh, scíth agus na sceitimíní. Fuair mé mo chéad giotár nuair a bhí mé 13 agus cuireadh mé faoi dhraíocht go tobann. Faoi láthair, seinnim le grúpa ceoilteoirí i mBaile Átha Cliath uaireanta, ach bhí mé i roinnt <a href="https://coloursystemfailure.bandcamp.com">bannaí ceoil</a> roimhe sin. Níl dóthain ama agam chun é sin a dhéanamh arís.'
                    },
                    SCIENCE:
                    {
                        HEADING: 'Eolaíocht',
                        TEXT: 'Tá suim ollmhór agam san eolaíocht - sa cheimic orgánach agus sa chógaseolaíocht go háirithe. Mar gheall air sin, tá céim nua á stáidéar agam. Is breá liom an fhisic agus an chosmeolaíocht chomh maith, ach níl mo chuid matamaitice maith go leor. Buíochas le hiniúchadh na heolaíochta, tháinig mé i mo dhuine níos fearr, mar d\'fhoghlaim mé an tábhacht de bhréagnú, de fhianaise agus de cheapadh criticiúil.'
                    },
                    LANGUAGES:
                    {
                        HEADING: 'Teangacha',
                        TEXT: 'Ar feadh an chuid is mó de mo shaol, bhí teanga amháin agam. Ansin, bhí dhá agam. Anois, déanaim iarracht as mo thriú ceann. Tá suim agam sna teangacha Gaelacha agus Lochlainnise agus sa shanasaíocht freisin. Tá ceangal eatarthu agus idir mó shuim san eolaíocht ríomhaireachta agus sa theangeolaíocht ríomhaireachta. Táim ar fáil ar <a href="https://www.duolingo.com/coconutlulz">Duolingo</a> agus <a href="http://www.memrise.com/user/coconutlulz/">Memrise</a>.'
                    },
                    CYCLING:
                    {
                        HEADING: 'Rothaíocht',
                        TEXT: 'Is aoibhinn liom í. Sin é.'
                    }
                },
                EXPERIENCE:
                {
                    PROFESSIONAL:
                    {
                        HEADING: 'Gairmiúil',
                        AL:
                        {
                            TITLE: 'Innealtóir Bogearraí (Lán-Chruacha) agus Riarthóir Córais',
                            DATERANGE: 'Deireadh Fómhair 2015 go láithreach',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Cuir seirbhísí innealtóireachta bogearraí \'s riaracháin córas le fáil do chliaint sheachtracha. Athraítear an teicneolaíocht i bhfeidhm idir chliaint.'
                            }
                        },
                        TAILIFY:
                        {
                            TITLE: 'Ard-Innealtóir Bogearraí (Cúil) agus Riarthóir Córais',
                            DATERANGE: 'Deireadh Fómhair 2014 go Deireadh Fómhair 2015',
                            DUTIES: 
                            {
                                DESCRIPTION1: 'Ailtire bogearraí agus ardfhorbróir do gach seirbhís cúil agus comhéadán na meáin shóisialta ag Tailify - scrúduithe san áireamh.',
                                DESCRIPTION2: 'Dearadh, riarachán agus déanamh chóipeanna chúltaca de bhunachar sonraí.',
                                DESCRIPTION3: 'Dearadh agus cothabháil bonneagair inscálaithe frithsheasmhach ag próiseáil go leor sonraí.',
                                DESCRIPTION4: 'Forbairt API (RESTful agus neamh-RESTful); bainistíocht cian-tascanna.',
                                DESCRIPTION5: 'Cothabháil séirbhísí inmheánacha.',
                                DESCRIPTION6: 'Slándáil inmheánach.',
                                DESCRIPTION7: 'Cáipéisí iomlána.'
                            }
                        },
                        DW:
                        {
                            TITLE: 'Innealtóir Bogearraí Sóisearach',
                            DATERANGE: 'Meán Fómhair 2012 go Meán Fómhair 2014',
                            DUTIES: 
                            {
                                DESCRIPTION1: 'Forbairt agus cothabháil seirbhísí ar-líne: seirbhísí forhallaí, déanamh comhchaighdeán, brath aicearraí, stóras sonraí srl. san áireamh.',
                                DESCRIPTION2: 'Forbairt agus cothabháil leabharlanna na gcliant.',
                                DESCRIPTION3: 'Bheith mar ceannasaí fiosrúcháin maidir le feidhm a bhaint as saorearraí in áit bogearraí dílsithe.',
                                DESCRIPTION4: 'Innealtóireacht tógála: uath-thógáil agus uath-thástáil.',
                                DESCRIPTION5: 'Cáipéisí.'
                            }
                        },
                        KERNA:
                        {
                            TITLE: 'Innealtóir Líonra agus Slándála',
                            DATERANGE: 'Meán Fómhair 2010 go Bealtaine 2012',
                            DUTIES: 
                            {
                                DESCRIPTION1: 'Innealtóireacht líonra.',
                                DESCRIPTION2: 'Dearadh bheartais slándála do chliaint sheachtracha.',
                                DESCRIPTION3: 'Monatóireacht, brath ionraí, iniúchadh, diagnóisic.',
                                DESCRIPTION4: 'Riarachán córas.',
                                DESCRIPTION5: 'Óstáil suíomhanna idirlín.',
                                DESCRIPTION6: 'Ostáil ríomhphoist, scagairí turscair, cosaint ar víris.',
                                DESCRIPTION7: 'Óstáil DNS.',
                                DESCRIPTION8: 'Déanamh caidrimh le go leor custaiméirí trí ghuthán agus ríomhphost; bheith ag freastail ar oifigí, sheomraí freastalaithe agus ionaid sonraí chomh mhaith.'
                            }
                        },
                        STREAM:
                        {
                            TITLE: 'Gníomhaire Thacaíocht Teicneolaíochta ADSL Eircom',
                            DATERANGE: 'Aibreán 2008 go Bealtaine 2008'
                        },
                        SBS:
                        {
                            TITLE: 'Oibrí ar Conradh Roinn Teicneolaíochta',
                            DATERANGE: 'Iúil 2005 go Meán Fómhair 2005; Iúil 2006'
                        }
                    },
                    VOLUNTARY:
                    {
                        HEADING: 'Deonach',
                        FSTRANSLATOR:
                        {
                            ORGANISATION: 'Saorearraí',
                            TITLE: 'Aistritheoir (An Ghaeilge go dtí Béarla)',
                            DATERANGE: 'Meán Fómhair 2015 go láithreach',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Seinnteoir ceoil <a href="https://www.transifex.com/gnumdk/lollypop/">Lollypop</a>',
                                DESCRIPTION2: 'Seinnteoir na meáin <a href="https://www.transifex.com/yaron/vlc-trans/">VLC</a>'
                            }
                        },
                        FS:
                        {
                            ORGANISATION: 'Saorearraí',
                            TITLE: 'Forbróir bogearraí',
                            DATERANGE: 'Deireadh Fómhair 2015 go láithreach',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Seinnteoir ceoil <a href="https://github.com/clementine-player">Clementine</a>'
                            }
                        },
                        RBADMIN:
                        {
                            ORGANISATION: 'RedBrick - Cumann Líonraithe Ollscoil Chathair Bhaile Átha Cliath',
                            TITLE: 'Riarthóir Córais (Ball Coiste)',
                            DATERANGE: 'Meán Fómhair 2009 go Feabhra 2010',
                            DUTIES:
                            {
                                DESCRIPTION1: 'Cothabháil córas an chumainn, IRC, óstáil suíomhanna idirlín, ríomhphost, stóras agus dánlann san áireamh.',
                                DESCRIPTION2: 'Bheith ag freastail ar chruinnithe coiste agus ag rith an choiste.'
                            }
                        }
                    }
                },
                EDUCATION:
                {
                    FORMAL:
                    {
                        HEADING: 'Foirmeálta',
                        OU:
                        {
                            INSTITUTION: 'An Ollscoil Oscailte',
                            TITLE: 'Céim Bhaitsiléara Eolaíochta (Gradaim) in Eolaíochtaí Aiceanta (An Cheimic)',
                            DATERANGE: '2011 go 2018 (meastachán)',
                            GRADE: 'Gradam',
                            GRADEDESCRIPTION: '(Is déanaí)',
                            NOTES: ''
                        },
                        DCU:
                        {
                            INSTITUTION: 'Ollscoil Chathair Bhaile Átha Cliath',
                            TITLE: 'Céim Bhaitsiléara Eolaíochta (Gradaim) i bhFeidhmchláir Ríomhaireachta (Innealtóireacht Bogearraí)',
                            DATERANGE: '2005 go 2010',
                            GRADE: '2.1',
                            GRADEDESCRIPTION: 'Dara honóracha sinsearacha',
                            NOTES: ''
                        },
                        LC:
                        {
                            INSTITUTION: 'Scoil Phobail Chúil Mhín, Cluain Saileach, Áth Cliath 15',
                            TITLE: 'Ardteist',
                            DATERANGE: '2000 go 2005',
                            GRADEDESCRIPTION: '',
                            NOTES: ''
                        }
                    },
                    INFORMAL:
                    {
                        HEADING: 'Neamhfhoirmeálta',
                        CNAG:
                        {
                            INSTITUTION: 'Conradh na Gaeilge',
                            TITLE1: 'Ardrang 1',
                            TITLE2: 'Meánrang 2',
                            TITLE3: 'Meánrang 1',
                            DATERANGE1: 'Eanáir go Márta, 2015',
                            DATERANGE2: 'Aibreán go Meitheamh, 2015',
                            DATERANGE3: 'Deireadh Fómhair go Samhain, 2015',
                            NOTES: ''
                        }
                    }
                },
                CONTACT:
                {
                    EMAIL: 'R-phost'
                }
            };

            $translateProvider
                .translations('en', english)
                .translations('ga', irish)
                .registerAvailableLanguageKeys(['en', 'ga'], {
                    'en_*': 'en',
                    'ga_IE': 'ga'
                })
                .useCookieStorage()
                .determinePreferredLanguage()
                .fallbackLanguage('en_*')
                .useSanitizeValueStrategy('sanitizeParameters');

            $logProvider.debugEnabled(true);

            $urlRouterProvider.otherwise('/synopsis');

            $stateProvider
                .state('synopsis', {
                    url: '/synopsis',
                    views: {
                        '': {
                            templateUrl: 'templates/partial-synopsis.html',
                            controller: 'MenuController',
                            controllerAs: 'menuCtrl'
                        },
                        'intro@synopsis': {
                            templateUrl: 'templates/partial-synopsis-intro.html',
                            controller: 'SynopsisController',
                            controllerAs: 'synCtrl'
                        },
                        'skills@synopsis': {
                            templateUrl: 'templates/partial-synopsis-skills.html',
                            controller: 'SynopsisController',
                            controllerAs: 'synCtrl'
                        }
                    }
                })
                .state('interests', {
                    url: '/interests',
                    views: {
                        '' : {
                            templateUrl: 'templates/interests.html',
                            controller: 'InterestsController',
                            controllerAs: 'interestsCtrl'
                        }
                    }
                })
                .state('experience', {
                    url: '/experience',
                    views: {
                        '': {
                            templateUrl: 'templates/partial-experience.html',
                            controller: 'MenuController',
                            controllerAs: 'menuCtrl'
                        },

                        'professional@experience': {
                            templateUrl: 'templates/partial-experience-professional.html',
                            controller: 'ExperienceController',
                            controllerAs: 'expCtrl'
                        },

                        'voluntary@experience': {
                            templateUrl: 'templates/partial-experience-voluntary.html',
                            controller: 'ExperienceController',
                            controllerAs: 'expCtrl'
                        }
                    }
                })
                .state('education', {
                    url: '/education',
                    views: {
                        '': {
                            templateUrl: 'templates/partial-education.html',
                            controller: '',
                            controllerAs: 'menuCtrl'
                        },

                        'formal@education': {
                            templateUrl: 'templates/partial-education-formal.html',
                            controller: 'EducationController',
                            controllerAs: 'eduCtrl'
                        },

                        'informal@education': {
                            templateUrl: 'templates/partial-education-informal.html',
                            controller: 'EducationController',
                            controllerAs: 'eduCtrl'
                        }
                    }
                })
                .state('contact', {
                    url: '/contact',
                    views: {
                        '': {
                            templateUrl: 'templates/partial-contact.html'
                        }
                    }
                })
                .state('blog', {
                    url: 'http://www.theanalystlounge.com/blog',
                    external: true
                });
        }])
        // Ensure that external ui-route links open.
        .run(function($rootScope, $window) {
            $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                if (toState.external) {
                    event.preventDefault();
                    $window.open(toState.url, '_self');
                }
            });
        });
})();

    
