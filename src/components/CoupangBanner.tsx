import React from 'react';

export default function CoupangBanner() {
  const partnerId = process.env.NEXT_PUBLIC_COUPANG_PARTNER_ID;

  // 파트너스 아이디가 없거나 아직 입력되지 않은 상태이면 렌더링하지 않음
  if (!partnerId || partnerId === '나중에_입력') {
    return null;
  }

  return (
    <div className="my-8 py-6 border-t border-b border-gray-100 flex flex-col items-center text-center">
      {/* 
        실제 쿠팡 파트너스 스크립트나 iframe이 위치할 자리입니다. 
        사용자의 파트너스 ID에 따라 동적으로 생성되거나 커스텀 컴포넌트를 둘 수 있습니다. 
      */}
      <div className="w-full max-w-md h-24 bg-gray-50 flex items-center justify-center border border-gray-200 rounded text-gray-400 text-sm mb-3">
        [쿠팡 파트너스 배너 영역]
      </div>
      <p className="text-xs text-gray-400">
        &quot;이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.&quot;
      </p>
    </div>
  );
}
