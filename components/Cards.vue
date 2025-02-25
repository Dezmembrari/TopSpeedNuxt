<template>
    <div class="w-full py-6 bg-gray-100 min-w-[360px]">
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-2 sm:p-3 md:p-5">
            Daca aduceți autoturismul la noi pentru reparații pe asigurare, vă oferim gratuit următoarele servicii:
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-7xl mx-auto">
            <!-- Card 1 -->
            <div class="m-2 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark text-center">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <NuxtImg class="rounded-t-lg object-cover w-full max-h-60" 
                    src="/pexels.webp" 
                    alt="handshake" 
                    sizes="320px sm:640px" 
                    densities="x1" 
                    loading="lazy" 
                    title="hands"
                    />
                    <a>
                        <div
                            class="absolute inset-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                    </a>
                </div>
                <div class="p-6 text-surface dark:text-white">
                    <h3 class="mb-2 text-xl font-medium leading-tight">Masina la schimb, oriunde!</h3>
                    <p class="mb-4 text-base">
                        Va punem la dispozitie mașină la schimb pe toată durata reparației, livrată gratuit la adresa
                        dorită.
                    </p>
                    <NuxtLink to="/servicii#masina">
                        <button type="button"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none">
                            Detalii
                        </button>
                    </NuxtLink>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="m-2 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark text-center">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <NuxtImg class="rounded-t-lg object-cover w-full max-h-60" 
                    src="/mercedes-platforma.webp"
                    alt="platform" 
                    sizes="320px sm:640px" 
                    densities="x1" 
                    loading="lazy" 
                    title="car on platform"
                    />
                    <a>
                        <div
                            class="absolute inset-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                    </a>
                </div>
                <div class="p-6 text-surface dark:text-white">
                    <h3 class="mb-2 text-xl font-medium leading-tight">Transport gratuit, fara batai de cap!</h3>
                    <p class="mb-4 text-base">
                        Oferim transport cu platforma, fara costuri suplimentare, al masinii din locul indicat de
                        dumneavoastra.
                    </p>
                    <NuxtLink to="servicii#platforma">
                        <button type="button"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none">
                            Detalii
                        </button>
                    </NuxtLink>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="m-2 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark text-center">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <NuxtImg class="rounded-t-lg object-cover w-full max-h-60" 
                    src="/hands.webp" 
                    alt="keys" 
                    sizes="320px sm:640px" 
                    densities="x1" 
                    loading="lazy" 
                    title="car keys" 
                    />
                    <a>
                        <div
                            class="absolute inset-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                        </div>
                    </a>
                </div>
                <div class="p-6 text-surface dark:text-white">
                    <h3 class="mb-2 text-xl font-medium leading-tight">Intocmire dosar, fara efort!</h3>
                    <p class="mb-4 text-base">
                        Ne ocupam integral de intocmirea dosarului si depunerea acestuia scutindu-va de orice efort sau
                        cost suplimentar.
                    </p>
                    <NuxtLink to="servicii#dosar">
                        <button type="button"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 focus:bg-primary-accent-300 focus:outline-none">
                            Detalii
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>