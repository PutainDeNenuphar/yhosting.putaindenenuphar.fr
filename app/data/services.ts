/**
 * yhosting.putaindenenuphar.fr - Copyright (C) 2026 Projet ℕénuphar
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import type { Service } from "~/enums/Service";

export const services: { selfHosted: Service[], external: Service[] } = {
    selfHosted: [
        {
            name: "Yrat Craft",
            description: "",
            image: "yratcraft.png",
            authors: ["Yuganix"],
            url: "https://yratcraft.putaindenenuphar.fr/",
            tags: ["Communauté"],
        },
        {
            name: "Astralis",
            description: "",
            image: "astralis.png",
            authors: ["Yuganix"],
            url: "https://astralis.putaindenenuphar.fr/",
            tags: ["Communauté"],
        },
        {
            name: "EaglerCraft",
            description: "",
            image: "eaglercraft.png",
            authors: ["Yuganix", "LAX1Dude"],
            url: "https://eaglercraft.putaindenenuphar.fr/",
            tags: ["Jeu"],
        },
        {
            name: "Jyth Editor",
            description: "Éditeur python fait en Java.",
            image: "jythproject.png",
            authors: ["Yuganix"],
            url: "https://jythproject.putaindenenuphar.fr/",
            tags: ["Logiciel"],
        },
        {
            name: "PythonCalc",
            description: "Calculatrice simple fait en python.",
            image: "pythoncalc.png",
            authors: ["Yuganix"],
            url: "https://pythoncalcproject.putaindenenuphar.fr/",
            tags: ["Logiciel"],
        },
        {
            name: "APPXCE",
            description: "Pages officielles pour les programmes APPXCE",
            image: "appxce.png",
            authors: ["Yuganix"],
            url: "https://appxce.putaindenenuphar.fr/",
            tags: ["Logiciel"],
        },
    ],
    external: [
        {
            name: "Putain de ℕénuphar",
            description: "Générez vos plus belles images tel des marquis et marquises !",
            image: "nenuphar.png",
            authors: ["Micorksen"],
            url: "https://putaindenenuphar.fr/",
            tags: ["Amusement"],
        },
        {
            name: "Mon compte ℕénuphar",
            description: "Un seul identifiant pour les dominer tous !",
            image: "monnenuphar.png",
            authors: ["Micorksen", "Yuganix", "Marvin"],
            url: "https://mon.putaindenenuphar.fr/",
            tags: ["Compte", "Plateforme"],
        },
        {
            name: "Ma messagerie ℕénuphar",
            description: "Une sacrée envie de lire mes e-mails.",
            image: "roundcubenenuphar.png",
            authors: ["Micorksen", "Yuganix"],
            url: "https://mail.putaindenenuphar.fr/",
            tags: ["Compte", "Messagerie"],
        },
        {
            name: "Convert Master",
            description: "Un convertisseur de fichier fiable et sécurisé.",
            image: "convertmaster.png",
            authors: ["PortalRunner"],
            url: "https://p2r3.github.io/convert/",
            tags: ["Outils"],
        },
    ],
};