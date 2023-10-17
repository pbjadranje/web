---
title: Predbožično jadranje - PBJ
layout: base.html
image: /assets/images/pbj.jpg
---

<h1 class="!mb-gap">{% block title %}{{ title }}{% endblock %}</h1>

<img src="{{ image }}" alt="{{ title }}" class="w-full rounded-lg shadow-lg">

{% for jadranje in collections.jadranje reversed %}
    {% if jadranje.data.active %}
        <h2 class="!mb-gap">{% block title %}Aktualno: {{ jadranje.data.title }} {{ jadranje.data.year }} {% endblock %}</h2>

        {% block lead %}{% endblock %}

        {% if jadranje.data.logo %}
            <div class="flex flex-col md:flex-row items-center justify-between">
                <div class="w-full md:w-1/3 p-4">
                    <a href="{{ jadranje.url }}"><img src="{{ jadranje.data.logo }}" alt="{{ jadranje.data.title }}" width="300"></a>
                </div>
                <div class="w-full md:w-2/3 p-4">
        {% endif %}

        <div class="lead">
            {{ jadranje.data.summary }}

            Več informacij je na voljo <a href="{{ jadranje.url }}" class="font-sans font-semibold no-underline border-b-2 border-link hover:bg-link-hover">tukaj</a>.
        </div>

        {% if jadranje.data.logo %}
                </div>
            </div>
        {% endif %}

        {% break %}
    {% endif %}
{% endfor %}


<h2 class="!mb-gap">{% block title %}Zimsko jadranje po Jadranu!?{% endblock %}</h2>

Leta 1986 se nam je zdelo, da bi ta izziv morali preizkusiti. Z jadrnico Elektra je tričlanska posadka odplula v sredo zvečer proti Susku. Ob jutranji zarji smo z burinom obšli Kamenjak in se zgodaj popoldne privezali v mandraču na otoku Susak.

V naslednjih letih smo ob koncu novembra spoznali somišljenike in se skupaj podajali v nepredvidljivo avanturo. Potem se nam je zdelo, da je jadranje v drugem tednu decembra že kar tradicionalno. Ob ugodnih vetrovih smo včasih od Červarja do Suska potrebovali manj kot 10 ur, včasih pa trikrat več. Dostikrat nas je prijetno grelo zimsko sonce, nekajkrat pa je bilo treba menjavati jadra na poledeneli palubi. V času med vojno smo ravno jadrali mimo Vrsarja, ko sta dva lovca bombardirala letališče...

V začetku nismo imeli začrtane poti in smo pluli dva dni in dve noči proti jugu in naslednja dva dni nazaj. Najbolj južna točka, ki smo jo dosegli je bila Proversa na Kornatih. Kasneje se je prijavljalo vse več jadrnic.

Da bi dogodek naredili bolj zanimiv, smo uvedli regatne etape in sistem tekmovanja, ki je zasnovan tako, da s faktorji izenačuje jadrnice najrazličnejših tipov.

Sedaj se na Predbožičnem jadranju srečujemo ljubitelji morja, da bi ga občutili tudi v zimskih razmerah in preskusili svoje jadralno znanje in opremo. Na koncu se soboto popoldne se zberemo na zaključini razglasitvi rezultatov in podelitvi pokalov, v nedeljo pa je čas za vrnitev v matično marino.


<h2 class="!mb-gap">{% block title %}Predbožična jadranja{% endblock %}</h2>

<table class="min-w-full border-collapse">
    <thead>
        <tr>
            <th class="text-left w-1/3">Jadranje</th>
            <th class="text-center">Leto</th>
            <th class="text-center">Jadrnic</th>
            <th class="text-center">Zmagovalec: generalno</th>
            <th class="text-center">Zmagovalec: korigirano</th>
        </tr>
    </thead>
    <tbody>
        {% for jadranje in collections.jadranje reversed %}
            <tr>
                <td class="text-left"><a href="{{ jadranje.url }}" class="no-underline border-b-2 border-link hover:bg-link-hover"> {{ jadranje.data.title }} </a></td>
                <td class="text-center">{{ jadranje.data.year }}</td>
                <td class="text-center">{{ jadranje.data.boats }}</td>
                <td class="text-center">
                    {% if jadranje.data.active %}
                        MOŽNA PRIJAVA
                    {% elsif jadranje.data.cancelled %}
                        ODPOVEDANO
                    {% else %}
                        {{ jadranje.data.winner_abs }}
                    {% endif %}
                </td>
                <td class="text-center">{{ jadranje.data.winner_cor }}</td>
            </tr>
        {% endfor %}
    </tbody>
</table>

<h2 class="!mb-gap">{% block title %}Začetki jadranja{% endblock %}</h2>

Decembra 1986 pred Božičem smo odjadrali z Electro zvečer iz Červarja; jutro na Kvarnerju; večer na Susku;

{% image "boz_reg86.jpg", "Med prvim božičnim jadranjem, Kvarner, december 1986." %}
