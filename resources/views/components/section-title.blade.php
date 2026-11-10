@props([
    'badge' => '',
    'title' => '',
    'highlight' => '',
    'subtitle' => '',
    'center' => true
])

<div class="mb-14 {{ $center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl' }}">
    @if($badge)
        <div class="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wider uppercase border border-[#ECECEC] bg-white text-[#C8A96A] shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></span>
            {{ $badge }}
        </div>
    @endif
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-[1.15]">
        {{ $title }}
        @if($highlight)
            <span class="block text-[#C8A96A] mt-1">{{ $highlight }}</span>
        @endif
    </h2>
    @if($subtitle)
        <p class="mt-4 text-base md:text-lg text-[#2B2B2B]/80 font-normal leading-relaxed">
            {{ $subtitle }}
        </p>
    @endif
</div>

