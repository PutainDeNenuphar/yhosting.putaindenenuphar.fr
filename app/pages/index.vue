<!--
yhosting.putaindenenuphar.fr - Copyright (C) 2026 Projet ℕénuphar

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<template>
    <div class="relative z-10">
        <div class="mx-auto max-w-6xl px-6 py-16 flex flex-col gap-16">
            <section>
                <div class="mb-8 flex flex-col gap-2">
                    <span class="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#00c8ff]">Services auto-hébergés</span>
                </div>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard v-for="service in services.selfHosted" v-bind="service" :key="service.name" />
                </div>
            </section>
        </div>
    </div>

    <div class="relative z-10">
        <div class="mx-auto max-w-6xl px-6 py-16 flex flex-col gap-16">
            <section>
                <div class="mb-8 flex flex-col gap-2">
                    <span class="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-[#00c8ff]">Services externes</span>
                </div>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard v-for="service in services.external" v-bind="service" :key="service.name" />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { services } from "~/data/services";
</script>