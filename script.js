tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            bg: '#f8fafc',      /* Soft premium slate gray-white */
                            card: '#ffffff',    /* Pure white */
                            border: '#e2e8f0',  /* Light gray borders */
                            accent: '#0284c7',  /* Premium Sky Blue */
                            indigo: '#4f46e5',  /* Premium Royal Indigo */
                            emerald: '#10b981', /* Success Green */
                            slate900: '#0f172a' /* Dark Contrast Text */
                        }
                    },
                    fontFamily: {
                        mono: ['Fira Code', 'Courier New', 'monospace'],
                        sans: ['Inter', 'system-ui', 'sans-serif']
                    }
                }
            }
        }

// Custom interactive logger variables and setup
        const terminalLogStream = document.getElementById('terminal-stream');
        const customActivityLogs = [
            "[SYS] Database connection validated.",
            "[PING] Hotlines established at voice: 973-350-4677.",
            "[INFO] Auto-routing processes set inside server matrix.",
            "[INFO] Verified design asset: Facebook Post - POWERHOUSE (1).PNG",
            "[INFO] Verified design asset: 973-350-4677.PNG",
            "[INFO] Verified design asset: 973-350-4677 (1).PNG",
            "[SUCCESS] Integration systems synchronized inside workspace.",
            "[SYS] Security certificates secure.",
            "[PIPELINE] Standing by for dispatch payload triggers..."
        ];

        let sequenceIndex = 0;
        function renderTerminalSequence() {
            if (sequenceIndex < customActivityLogs.length) {
                const logLine = document.createElement('p');
                logLine.className = 'text-slate-500 transition-opacity duration-300 opacity-0';
                logLine.textContent = customActivityLogs[sequenceIndex];
                terminalLogStream.appendChild(logLine);
                
                // Drop old log units if they exceed readable height
                if (terminalLogStream.children.length > 25) {
                    terminalLogStream.removeChild(terminalLogStream.firstChild);
                }

                // Autoscroll to bottom
                terminalLogStream.scrollTop = terminalLogStream.scrollHeight;
                
                // Simple fade in trigger
                setTimeout(() => {
                    logLine.classList.remove('opacity-0');
                }, 40);

                sequenceIndex++;
                setTimeout(renderTerminalSequence, Math.random() * 2500 + 1000);
            } else {
                // Keep the sequence looped infinitely for dynamic page feel
                sequenceIndex = 0;
                setTimeout(renderTerminalSequence, 2000);
            }
        }

        // Initialize logging routines instantly
        window.onload = function() {
            renderTerminalSequence();
        };

        // Lightbox Expansion Controls
        function openAssetLightbox(fileName) {
            const overlay = document.getElementById('asset-lightbox');
            const placeholderImg = document.getElementById('lightbox-image');
            const placeholderCap = document.getElementById('lightbox-caption');

            placeholderImg.src = fileName;
            placeholderImg.onerror = function() {
                this.src = `https://placehold.co/600x600/f8fafc/0284c7?text=${encodeURIComponent(fileName)}`;
            };
            placeholderCap.textContent = `SYSTEM ASSET VERIFICATION PATH: ${fileName}`;
            overlay.classList.remove('hidden');
        }

        function closeAssetLightbox() {
            document.getElementById('asset-lightbox').classList.add('hidden');
        }

        // Automated Qualification Assistant Actions
        function interactWithBot(choiceType, assistantReply) {
            const botLogContainer = document.getElementById('bot-messages');
            
            // Build User Choice Speech Bubble
            const userBox = document.createElement('div');
            userBox.className = "flex flex-col gap-1 items-end max-w-[90%] ml-auto";
            userBox.innerHTML = `
                <span class="text-[9px] font-mono text-slate-400">USER</span>
                <div class="bg-brand-accent text-white p-2.5 rounded-xl rounded-tr-none font-bold shadow-sm">
                    ${choiceType}
                </div>
            `;
            botLogContainer.appendChild(userBox);

            // Record dynamic event logs inside the adjacent terminal window
            const alertLog = document.createElement('p');
            alertLog.className = 'text-brand-indigo font-bold';
            alertLog.textContent = `[USER LOG] Selected interest track: ${choiceType}`;
            terminalLogStream.appendChild(alertLog);
            terminalLogStream.scrollTop = terminalLogStream.scrollHeight;

            // Automatically configure form values for efficiency
            const selectedDropdown = document.getElementById('form-service');
            if (choiceType === 'Web Engineering') {
                selectedDropdown.value = 'Tactical Web Designs Only';
            } else if (choiceType === 'API Automation') {
                selectedDropdown.value = 'Background Automated Workflows';
            } else if (choiceType === 'Print & Mail Drops') {
                selectedDropdown.value = 'Complete Pipeline Deployment';
            }

            // Simulate assistant response lag
            setTimeout(() => {
                const responseBox = document.createElement('div');
                responseBox.className = "flex flex-col gap-1 max-w-[90%]";
                responseBox.innerHTML = `
                    <span class="text-[9px] font-mono text-slate-400">POWERHOUSE_ASSISTANT</span>
                    <div class="bg-white border border-slate-200 text-slate-600 p-2.5 rounded-xl rounded-tl-none shadow-sm">
                        ${assistantReply} <span class="block mt-1.5 text-brand-accent font-mono text-[9px] uppercase font-bold">Preferences updated in dispatch menu below!</span>
                    </div>
                `;
                botLogContainer.appendChild(responseBox);
                botLogContainer.scrollTop = botLogContainer.scrollHeight;
            }, 600);
        }

        function resetBotInquiry() {
            const botLogContainer = document.getElementById('bot-messages');
            botLogContainer.innerHTML = `
                <div class="flex flex-col gap-1 max-w-[90%]">
                    <span class="text-[9px] font-mono text-slate-400">POWERHOUSE_ASSISTANT</span>
                    <div class="bg-white border border-slate-200 text-slate-600 p-2.5 rounded-xl rounded-tl-none shadow-sm">
                        Hello! Let's align on your next marketing phase. What channel should we prioritize?
                    </div>
                </div>
            `;
        }

        // Intake Form Submissions
        function submitFormDispatch(event) {
            event.preventDefault();

            const nameValue = document.getElementById('form-name').value;
            const phoneValue = document.getElementById('form-phone').value;
            const emailValue = document.getElementById('form-email').value;
            const serviceValue = document.getElementById('form-service').value;
            const notesValue = document.getElementById('form-notes').value;

            // Document the action inside our simulated terminal output
            const compileLog = document.createElement('p');
            compileLog.className = 'text-brand-emerald font-bold uppercase animate-pulse';
            compileLog.textContent = `[SAVING DATA] Package encrypted: ${nameValue} // Line: ${phoneValue}`;
            terminalLogStream.appendChild(compileLog);
            terminalLogStream.scrollTop = terminalLogStream.scrollHeight;

            console.log("Structured Contact Inquiry Packet Saved:", { nameValue, phoneValue, emailValue, serviceValue, notesValue });

            // Toggle active interface view
            document.getElementById('dispatch-form-container').classList.add('hidden');
            document.getElementById('confirm-view').classList.remove('hidden');
        }

        function resetDispatchInterface() {
            document.getElementById('dispatch-form').reset();
            document.getElementById('dispatch-form-container').classList.remove('hidden');
            document.getElementById('confirm-view').classList.add('hidden');
        }