---
title: Predbožično jadranje - PBJ
layout: base.html
---

<h1 class="!mb-gap">{% block title %}{{ title }}{% endblock %}</h1>

Zimsko jadranje po Jadranu!? Leta 1986 se nam je zdelo, da bi ta izziv morali preizkusiti. Z jadrnico Elektra je tričlanska posadka odplula v sredo zvečer proti Susku. Ob jutranji zarji smo z burinom obšli Kamenjak in se zgodaj popoldne privezali v mandraču na otoku Susak.

V naslednjih letih smo ob koncu novembra spoznali somišljenike in se skupaj podajali v nepredvidljivo avanturo. Potem se nam je zdelo, da je jadranje v drugem tednu decembra že kar tradicionalno. Ob ugodnih vetrovih smo včasih od Červarja do Suska potrebovali manj kot 10 ur, včasih pa trikrat več. Dostikrat nas je prijetno grelo zimsko sonce, nekajkrat pa je bilo treba menjavati jadra na poledeneli palubi. V času med vojno smo ravno jadrali mimo Vrsarja, ko sta dva lovca bombardirala letališče...

V začetku nismo imeli začrtane poti in smo pluli dva dni in dve noči proti jugu in naslednja dva dni nazaj. Najbolj južna točka, ki smo jo dosegli je bila Proversa na Kornatih. Kasneje se je prijavljalo vse več jadrnic.

Da bi dogodek naredili bolj zanimiv, smo uvedli regatne etape in sistem tekmovanja, ki je zasnovan tako, da s faktorji izenačuje jadrnice najrazličnejših tipov.

Sedaj se na Predbožičnem jadranju srečujemo ljubitelji morja, da bi ga občutili tudi v zimskih razmerah in preskusili svoje jadralno znanje in opremo. Na koncu se soboto popoldne se zberemo na zaključini razglasitvi rezultatov in podelitvi pokalov, v nedeljo pa je čas za vrnitev v matično marino.


<h2 class="!mb-gap">{% block title %}Predbožična jadranja{% endblock %}</h2>

<table>
    <thead>
        <tr>
            <th align="left">Jadranje</th>
            <th align="center">Leto</th>
            <th align="center">Jadrnic</th>
            <th align="center">Zmagovalec generalno</th>
            <th align="center">Zmagovalec korigirano</th>
        </tr>
    </thead>
    <tbody>
        {% for regata in collections.regata reversed %}
            <tr>
                <td><a href="{{ regata.url }}"> {{ regata.data.title }} </a></td>
                <td align="center">{{ regata.data.year }}</td>
                <td align="center">{{ regata.data.boats }}</td>
                <td align="center">
                    {% if regata.data.cancel %}
                        ODPOVEDANO
                    {% else %}
                        {{ regata.data.winner_abs }}
                    {% endif %}
                </td>
                <td align="center">{{ regata.data.winner_cor }}</td>
            </tr>
        {% endfor %}
    </tbody>
</table>

<h2 class="!mb-gap">{% block title %}Začetki jadranja{% endblock %}</h2>

Decembra 1986 pred Božičem smo odjadrali z Electro zvečer iz Červarja; jutro na Kvarnerju; večer na Susku;

{% image "./boz_reg86.jpg", "Med prvim božičnim jadranjem, Kvarner, december 1986." %}
