%%%%%%%%%%%%%%%%
\NeedsTeXFormat{LaTeX2e}[1995/12/01]
\ProvidesClass{altacv}[2024/10/31 AltaCV v1.7.3, yet another alternative class for a resume/curriculum vitae.]

\DeclareOption{academicons}{\ClassWarning{altacv}{academicons option is now obsolete and unnecessary.}}
\newif\if@normalphoto
\DeclareOption{normalphoto}{\@normalphototrue}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{extarticle}}
\newif\if@raggedtwoe
\DeclareOption{ragged2e}{\@raggedtwoetrue}
\newif\if@withhyper
\DeclareOption{withhyper}{\@withhypertrue}
\ProcessOptions\relax

\LoadClass{extarticle}
\RequirePackage{etoolbox}
\RequirePackage{xcolor}
\RequirePackage[a-1b]{pdfx}
\RequirePackage{accsupp}
\pdfstringdefDisableCommands{\let\\\space}
\RequirePackage{xparse}
\RequirePackage[margin=2cm]{geometry}
\RequirePackage[fixed]{fontawesome5}%[2020-01-15]
\providecommand\IfFormatAtLeastTF{\@ifl@t@r\fmtversion}
\IfFormatAtLeastTF{2021-11-15}{}{\RequirePackage{scrlfile}}
\IfFileExists{simpleiconsglyphs-pdftex.tex}{\RequirePackage{simpleicons}}{}
\RequirePackage{iftex}
\ifundef{\iftutex}{%
  \newif\iftutex
  \ifxetex\tutextrue
  \else
    \ifluatex\tutextrue\else\tutexfalse\fi
  \fi
}{}
\iftutex 
  \RequirePackage{fontspec}
\else
  \RequirePackage{cmap}
  \RequirePackage[utf8]{inputenc}
  \RequirePackage[T1]{fontenc}
  \input{glyphtounicode}
  \pdfglyphtounicode{f_f}{FB00}
  \pdfglyphtounicode{f_f_i}{FB03}
  \pdfglyphtounicode{f_f_l}{FB04}
  \pdfglyphtounicode{f_i}{FB01}
  \pdfgentounicode=1
\fi

\if@raggedtwoe
  \RequirePackage[newcommands]{ragged2e}
\fi

\if@withhyper
\IfFormatAtLeastTF{2020-10-01}{%
  \AddToHook{begindocument/before}{\hypersetup{hidelinks}\urlstyle{same}}
}{%
  \AtBeginDocument{\hypersetup{hidelinks}\urlstyle{same}}
}
\fi

% Configuration des couleurs pour la classe
\colorlet{accent}{blue!70!black}
\colorlet{emphasis}{black}
\colorlet{heading}{black}
\colorlet{headingrule}{black}
\colorlet{subheading}{emphasis}
\colorlet{body}{black!80!white}
\colorlet{name}{heading}
\colorlet{tagline}{accent}

\newcommand{\cvItemMarker}{{\small\textbullet}}
\newcommand{\cvRatingMarker}{\faCircle}
\let\itemmarker\cvItemMarker
\let\ratingmarker\cvRatingMarker
\newcommand{\cvDateMarker}{\faCalendar[regular]}
\newcommand{\cvLocationMarker}{\faMapMarker}
\newcommand{\locationname}{Location}
\newcommand{\datename}{Date}

\RequirePackage{tikz}
\usetikzlibrary{arrows}
\RequirePackage[skins]{tcolorbox}
\RequirePackage[inline]{enumitem}
\setlist{leftmargin=*,labelsep=0.5em,nosep,itemsep=0.15\baselineskip,after=\vspace{0.15\baselineskip}}
\setlist[itemize]{label=\cvItemMarker}
\RequirePackage{graphicx}
\RequirePackage{trimclip}
\RequirePackage{dashrule}
\RequirePackage{multirow,tabularx}
\RequirePackage{changepage}

% --- Mise en page "une seule colonne" (remplace le système à deux colonnes
% paracol par des définitions inertes) : les documents peuvent continuer à
% appeler \columnratio, \begin{paracol}...\end{paracol} et \switchcolumn sans
% modification ; ces commandes ne font simplement plus rien, et tout le
% contenu s'enchaîne dans une seule colonne pleine largeur, dans l'ordre où
% il est écrit dans le fichier .tex (colonne "gauche" puis colonne "droite").
\RequirePackage{paracol}
\renewenvironment{paracol}[1]{}{}
\renewcommand{\columnratio}[2][]{}
% \switchcolumn is only defined by paracol *inside* the paracol environment on
% recent releases (older releases defined it at package load time); guard
% with \ifdef so this class keeps working across paracol versions without
% changing the single-column behavior documented above.
\ifdef{\switchcolumn}{\renewcommand{\switchcolumn}[1][]{\par\bigskip}}{\newcommand{\switchcolumn}[1][]{\par\bigskip}}

\setlength{\parindent}{0pt}
\newcommand{\divider}{\par\noindent\textcolor{body!30}{\hdashrule{\linewidth}{0.6pt}{0.5ex}}\vspace{4pt}}

\newenvironment{fullwidth}{%
  \begin{adjustwidth}{}{\dimexpr-\marginparwidth-\marginparsep\relax}}
  {\end{adjustwidth}}

\newcommand{\utffriendlydetokenize}[1]{%
\scantokens{%
  \catcode`\_=12%
  \catcode`\&=12%
  \catcode`\$=12%
  \catcode`\#=12%
  \catcode`\~=12%
  {#1}%
}%
}
\ExplSyntaxOn
\NewDocumentCommand{\printinfo}{m m o}{%
  \IfNoValueTF{#3}{%
    \mbox{\textcolor{accent}%
    {\BeginAccSupp{method=escape,ActualText={\detokenize{#1}:}}\normalfont #1\EndAccSupp{}}%
    ~\utffriendlydetokenize{#2}}\,{\color{body!60}\textbar}\,%
  }{%
     \if@withhyper%
      \mbox{\textcolor{accent}%
      {\BeginAccSupp{method=escape,ActualText={\detokenize{#1}:}}\normalfont #1\EndAccSupp{}}%
      ~\href{#3}{\utffriendlydetokenize{#2}}}\,{\color{body!60}\textbar}\,
     \else%
       \ClassWarning{Please specify [withhyper] option to enable hyperlinks. Printing out full hyperlink prefix #1 for now.}%
      \mbox{\textcolor{accent}
      {\BeginAccSupp{method=escape,ActualText={\detokenize{#1}:}}\normalfont #1\EndAccSupp{}}%
      ~{\utffriendlydetokenize{#3#2}}}\,{\color{body!60}\textbar}\,%
     \fi%
  }%
}%

\NewDocumentCommand{\NewInfoField}{s m m o}{%
  \IfBooleanF{#1}{
    \IfNoValueF{#4}{\csdef{#2 hyperprefix}{#4}}%
  }
  \csdef{#2 symbol}{#3}
  \IfBooleanTF{#1}
    { \csdef{#2}##1##2{%
        \if@withhyper
          \IfNoValueTF {##2}
            {\printinfo{\csuse{#2 symbol}}{##1}}%
            {\printinfo{\csuse{#2 symbol}}{##1}[##2]}%
        \else
          \printinfo{\csuse{#2 symbol}}{##1}%
        \fi%
      }%
    }
    { \csdef{#2}##1{%
        \if@withhyper
          \IfNoValueTF {#4}
            {\printinfo{\csuse{#2 symbol}}{##1}}%
            {\printinfo{\csuse{#2 symbol}}{##1}[\csuse{#2 hyperprefix}##1]}%
        \else
          \printinfo{\csuse{#2 symbol}}{##1}%
        \fi%
      }%
    }
}
\ExplSyntaxOff

\newcommand{\name}[1]{\def\@name{#1}}
\newcommand{\tagline}[1]{\def\@tagline{#1}}
\newcommand{\personalinfo}[1]{\def\@personalinfo{#1}}
\NewInfoField{email}{\faAt}[mailto:]
\NewInfoField{mailaddress}{\faEnvelope}
\NewInfoField{phone}{\faPhone}[tel:]
\NewInfoField{homepage}{\faGlobe}[https://]
\NewInfoField{twitter}{\faTwitter}[https://twitter.com/]
\ifcsdef{simpleicon@xicon}
 {\NewInfoField{xtwitter}{\raisebox{-0.2ex}{\scalebox{0.95}{\simpleicon{x}}}\,}[https://x.com/]}
 {\let\xtwitter\twitter%
  \pretocmd{\xtwitter}{\ClassWarning{altacv}{You tried to use \string\xtwitter, but the new X icon isn't available. Please ensure you have updated the `simpleicons' package. Falling back to \string\twitter\space icon for now}}{}{}%
 }
\NewInfoField{linkedin}{\faLinkedin}[https://linkedin.com/in/]
\NewInfoField{github}{\faGithub}[https://github.com/]
\ifdef{\faOrcid}{
  \NewInfoField{orcid}{\faOrcid}[https://orcid.org/]
}{\iftutex
    \RequirePackage{academicons}
    \NewInfoField{orcid}{\aiOrcid\space}[https://orcid.org/]
  \else
    \ClassWarning{altacv}{ORCID icon for \string\orcid\space unavailable in pdflatex. Please compile with XeLaTeX or LuaLaTeX; or upgrade your LaTeX distribution and packages}
    \NewInfoField{orcid}{\fbox{O?}\space}[https://orcid.org/]
  \fi
}
\NewInfoField{location}{\cvLocationMarker}

\newlength{\altacv@photos@width}
\newlength{\altacv@photo@diam@left}
\newlength{\altacv@photo@diam@right}
\def\altacv@left@photos{}
\def\altacv@right@photos{}

\newcommand{\@makeaphoto}[2]{%
  \begin{minipage}{#1}%
    \if@normalphoto
      \includegraphics[width=\linewidth]{#2}
    \else
      \tikz\path[fill overzoom image={#2}]circle[radius=0.5\linewidth];
    \fi%
  \end{minipage}%
}

\newcommand{\altacv@add@photo@left}[1]{%
  \appto{\altacv@left@photos}{%
    \@makeaphoto{\altacv@photo@diam@left}{#1}\hspace{1ex}%
  }%
  \addtolength{\altacv@photos@width}{\altacv@photo@diam@left}%
  \addtolength{\altacv@photos@width}{1ex}%
}
\newcommand{\altacv@add@photo@right}[1]{%
  \appto{\altacv@right@photos}{%
    \@makeaphoto{\altacv@photo@diam@right}{#1}\hspace{1ex}%
  }%
  \addtolength{\altacv@photos@width}{\altacv@photo@diam@right}%
  \addtolength{\altacv@photos@width}{1ex}%
}
\newcommand{\photoL}[2]{%
  \setlength{\altacv@photo@diam@left}{#1}%
  \forcsvlist{\altacv@add@photo@left}{#2}%
}
\newcommand{\photoR}[2]{%
  \setlength{\altacv@photo@diam@right}{#1}%
  \forcsvlist{\altacv@add@photo@right}{#2}%
}
\let\photo\photoR

\newcommand{\namefont}{\LARGE\bfseries}
\newcommand{\taglinefont}{\large\bfseries}
\newcommand{\personalinfofont}{\footnotesize\bfseries}
\newcommand{\cvsectionfont}{\LARGE\bfseries}
\newcommand{\cvsubsectionfont}{\normalsize\bfseries}
% Réduction de la taille du nom et retrait de la majuscule forcée
\renewcommand{\namefont}{\Huge\bfseries}
\newcommand{\taglinefontheader}{\large\itshape}
% Bandeau d'en-tête pleine largeur, centré, fond teinté sur la couleur
% d'accent du document courant (calculé au moment de l'appel, pas au
% chargement de la classe, pour suivre les \colorlet{accent}{...} propres
% à chaque CV). Les photos éventuellement définies via \photoL/\photoR ne
% sont pas affichées dans ce style : elles restent sans effet visuel.
\newcommand{\makecvheader}{%
  \colorlet{cvheaderbg}{accent!8!white}%
  {\setlength{\fboxsep}{3pt}%
  \begin{center}
  \noindent\colorbox{cvheaderbg}{%
    \begin{minipage}{\dimexpr\linewidth-2\fboxsep}
    \centering\vspace{3pt}
    {\namefont\color{name}\@name\par}
    \vspace{2pt}
    {\taglinefontheader\color{tagline}\@tagline\par}
    \vspace{2pt}
    {\footnotesize\color{body}\@personalinfo\par}
    \vspace{3pt}
    \end{minipage}%
  }%
  \end{center}}\vspace{3pt}
}


\renewenvironment{quote}{\color{accent}\itshape\large}{\par}

\newcommand{\cvsection}[2][]{%
  \par\vspace{5pt}% \par rend la commande sûre même sans ligne vide avant dans le .tex
  \ifstrequal{#1}{}{}{\marginpar{\vspace*{\dimexpr1pt-\baselineskip}\raggedright\input{#1}}}%
  {\color{heading}\cvsectionfont \MakeUppercase{#2}}\par%
  {\color{headingrule}\rule{\linewidth}{0.8pt}\par}\vspace{3pt}
}

\newcommand{\cvsubsection}[1]{%
  \smallskip%
  {\color{subheading}\cvsubsectionfont{#1}\par}\medskip
}

% Titre + organisation sur une seule ligne (gras), date alignée à droite
% sur la même ligne en couleur d'accent -- reproduit le style de référence
% "une colonne, dates alignées à droite". Le lieu (#4), s'il est fourni,
% s'affiche sur une petite ligne grise sous le titre plutôt que d'allonger
% encore la ligne de droite.
\newcommand{\cvevent}[4]{%
  \normalsize\par\noindent
  {\bfseries\color{emphasis}#1\ifstrequal{#2}{}{}{ -- #2}}%
  \ifstrequal{#3}{}{}{%
    \hfill{\color{accent}\bfseries\cvDateMarker~%
      \BeginAccSupp{method=pdfstringdef,ActualText={\datename: }}#3\EndAccSupp{}}%
  }\par
  \ifstrequal{#4}{}{}{%
    {\small\color{body}\cvLocationMarker~%
      \BeginAccSupp{method=pdfstringdef,ActualText={\locationname: }}#4\EndAccSupp{}\par}}%
  \vspace{3pt}%
  \footnotesize% réduit la taille des puces qui suivent (écrites directement
        % dans le .tex, hors de cette macro) sans devoir toucher chaque document
}

\newcommand{\cvachievement}[3]{%
  \begin{tabularx}{\linewidth}{@{}p{2em} @{\hspace{1ex}} >{\raggedright\arraybackslash}X@{}}
  \multirow{2}{*}{\Large\color{accent}\BeginAccSupp{method=escape,ActualText={#1: }}#1\EndAccSupp{}} & \bfseries\textcolor{emphasis}{#2}\\
  & #3
  \end{tabularx}%
  \smallskip
}

\newcommand{\cvtag}[1]{%
  \tikz[baseline]\node[anchor=base,draw=body!30,rounded corners,inner xsep=1ex,inner ysep =0.75ex,text height=1.5ex,text depth=.25ex]{#1};
}

\newcommand{\cvskill}[2]{%
  \par\noindent
  \textcolor{emphasis}{\textbf{#1}}\hfill
  \BeginAccSupp{method=plain,ActualText={#2}}
  \foreach \x in {1,...,5}{%
    \ifdimequal{\x pt - #2 pt}{0.5pt}%
    {\clipbox*{0pt -0.25ex {.5\width} {\totalheight}}{\color{accent}\cvRatingMarker}%
     \clipbox*{{.5\width} -0.25ex {\width} {\totalheight}}{\color{body!30}\cvRatingMarker}}
    {\ifdimgreater{\x bp}{#2 bp}{\color{body!30}}{\color{accent}}\cvRatingMarker}%
  }\EndAccSupp{}\par%
}

\newcommand{\wheelchart}[4][0]{%
    \begingroup\centering
    \def\innerradius{#3}%
    \def\outerradius{#2}%
    \pgfmathsetmacro{\totalnum}{0}%
    \foreach \value/\colour/\name in {#4} {%
        \pgfmathparse{\value+\totalnum}%
        \global\let\totalnum=\pgfmathresult%
    }%
    \begin{tikzpicture}

      \pgfmathsetmacro{\wheelwidth}{\outerradius-\innerradius}
      \pgfmathsetmacro{\midradius}{(\outerradius+\innerradius)/2}
      \pgfmathsetmacro{\totalrot}{-90 + #1}
      \begin{scope}[rotate=\totalrot]

      \pgfmathsetmacro{\cumnum}{0}
      \foreach \value/\width/\colour/\name in {#4} {
            \pgfmathsetmacro{\newcumnum}{\cumnum + \value/\totalnum*360}

            \pgfmathsetmacro{\percentage}{\value/\totalnum*100}
            \pgfmathsetmacro{\midangle}{-(\cumnum+\newcumnum)/2}
            \pgfmathparse{
               (-\midangle>180?"west":"east")
            } \edef\textanchor{\pgfmathresult}
            \pgfmathparse{
               (-\midangle>180?"flush left":"flush right")
            } \edef\textalign{\pgfmathresult}
            \pgfmathsetmacro\labelshiftdir{1-2*(-\midangle<180)}
            \filldraw[draw=white,fill=\colour] (-\cumnum:\outerradius) arc (-\cumnum:-(\newcumnum):\outerradius) --
            (-\newcumnum:\innerradius) arc (-\newcumnum:-(\cumnum):\innerradius) -- cycle;

            \draw  [*-,thin,emphasis] node [append after command={(\midangle:\midradius pt) -- (\midangle:\outerradius + 1ex) -- (\tikzlastnode)}] at (\midangle:\outerradius + 1ex) [xshift=\labelshiftdir*0.5cm,inner sep=1ex, outer sep=0pt, text width=\width,anchor=\textanchor,align=\textalign,font=\small,text=body]{\BeginAccSupp{method=pdfstringdef,ActualText={\name: \value}}\name\EndAccSupp{}};
            \global\let\cumnum=\newcumnum
        }
      \end{scope}
    \end{tikzpicture}\par
    \endgroup
}

\newcommand{\cvref}[3]{%
  \smallskip
  \textcolor{emphasis}{\textbf{#1}}\par
  \begin{description}[font=\color{accent},style=multiline,leftmargin=1.35em,align=left]
  \item[\small\normalfont\emailsymbol] #2
  \item[\small\normalfont\mailaddresssymbol] #3
  \end{description}
}

\newenvironment{cvcolumn}[1]{\begin{minipage}[t]{#1}\raggedright}{\end{minipage}}

\RequirePackage{afterpage}
\newcommand{\addsidebar}[2][]{\marginpar{%
  \ifstrequal{#1}{}{}{\vspace*{#1}}%
  \input{#2}}%
}
\newcommand{\addnextpagesidebar}[2][]{\afterpage{\addsidebar[#1]{#2}}}

\RequirePackage{pgffor}
\def\my@namelist{}
\newcommand{\mynames}[1]{\def\my@namelist{#1}}
\newtoggle{boldname}
\IfFormatAtLeastTF{2021-11-15}{%
  \AddToHook{package/biblatex/after}{%
    \altacv@makeboldnames
  }%
}{%
  \AfterPackage{biblatex}{%
    \altacv@makeboldnames
  }%
}

\newcommand{\altacv@makeboldnames}{%
  \renewcommand*{\mkbibnamefamily}[1]{%
    \global\togglefalse{boldname}%
    \foreach \my@fname / \my@gname in \my@namelist {%
      \ifboolexpr{ test {\ifdefstrequal{\namepartfamily}{\my@fname}}
                   and
                   test {\ifdefstrequal{\namepartgiven}{\my@gname}}}
        {\global\toggletrue{boldname}}{}%
    }%
    \iftoggle{boldname}{\textbf{##1}}{##1}%
  }%
% 
  \renewcommand*{\mkbibnamegiven}[1]{%
    \global\togglefalse{boldname}%
    \foreach \my@fname / \my@gname in \my@namelist{%
      \ifboolexpr{ test {\ifdefstrequal{\namepartfamily}{\my@fname}}
                   and
                   test {\ifdefstrequal{\namepartgiven}{\my@gname}}}
        {\global\toggletrue{boldname}\breakforeach}{}%
    }%
    \iftoggle{boldname}{\textbf{##1}}{##1}%
  }
}

\IfFormatAtLeastTF{2020-10-01}{%
  \AddToHook{begindocument/before}{%
    \pagestyle{empty}%
    \color{body}%
    \raggedright%
  }
}{%
  \AtBeginDocument{%
    \pagestyle{empty}%
    \color{body}%
    \raggedright%
  }
}
