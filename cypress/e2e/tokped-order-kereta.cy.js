/// <reference types="cypress" />
import moment from 'moment';

describe('test halaman order kereta api tokped',()=>{
    beforeEach(()=>{
        cy.visit('/', {
            headers: {
                "Accept-Encoding": "gzip, deflate, br"
            }
        })
    })

    it('Menampilkan prompt "tiket kereta sudah dapat dibeli untuk 45 hari kedepan"',()=>{
        cy.get('#unf-ticker__active-item').should('be.visible')
        cy.get('.css-bld83u-unf-heading > span').should('have.text','Saat ini tiket kereta sudah dapat dibeli untuk 45 hari kedepan, yuk cek sekarang!')
    })

    it('Exit prompt "tiket kereta sudah dapat dibeli untuk 45 hari kedepan"',()=>{
        cy.get('.css-1us9ca7').click()
        cy.get('#unf-ticker__active-item').should('not.exist')
    })

    it('Menampilkan section Pesan tiket kereta online di Tokopedia',()=>{
        cy.get('.css-q1vfvh-unf-card').should('be.visible')
        cy.get('.css-1i82c75').should('be.visible').should('have.text','Pesan tiket kereta online di Tokopedia')
    })

    it('Menampilkan section Promo tiket kereta api',()=>{
        cy.get('.css-dx6ynd').should('be.visible')
        cy.get('.css-1dj9l09').should('be.visible').should('have.text','Promo tiket kereta api')
    })

    it('Menampilkan gambar promo tiket kereta api',()=>{
        cy.wait(10000)
        // cy.get('.css-ztvvor').should('have.length', 4)
        cy.get(':nth-child(2) > .css-sncotz > .css-bqlp8e > .css-1kbs39j').should('have.attr','src','https://images.tokopedia.net/img/aBwccf/2023/4/13/b8a4cbc2-8f05-4cd3-843b-519009b886fe.jpg?ect=4g')
        cy.get(':nth-child(3) > .css-sncotz > .css-bqlp8e > .css-1kbs39j').should('have.attr','src','https://images.tokopedia.net/img/aBwccf/2022/11/2/5569c74a-59bf-4dc1-bd4c-1f357728d648.jpg?ect=4g')
        cy.get(':nth-child(4) > .css-sncotz > .css-bqlp8e > .css-1kbs39j').should('have.attr','src','https://images.tokopedia.net/img/aBwccf/2023/1/22/7d3d8c67-e74b-4a6b-af07-78bb2dcad1d5.jpg?ect=4g')
        cy.get(':nth-child(5) > .css-sncotz > .css-bqlp8e > .css-1kbs39j').should('have.attr','src','https://images.tokopedia.net/img/aBwccf/2023/2/17/f492de15-5d9c-4955-a95f-5c23a00127f4.jpg?ect=4g')
        cy.get(':nth-child(6) > .css-sncotz > .css-bqlp8e > .css-1kbs39j').should('have.attr','src','https://images.tokopedia.net/img/aBwccf/2023/4/13/ef041cc5-d5a7-4471-be6f-e1efca099f62.jpg?ect=4g')
    })

    it('Menampilkan section Praktisnya beli tiket kereta api di Tokopedia!',()=>{
        cy.get('.css-1k6bu3o').should('be.visible')
        cy.get('.css-1k6bu3o > .big-title').should('be.visible').should('have.text','Praktisnya beli tiket kereta api di Tokopedia!')
    })

    it('Menampilkan gambar Praktisnya beli tiket kereta api di Tokopedia',()=>{
        cy.wait(15000)
        cy.get(':nth-child(2) > :nth-child(1) > .css-bqlp8e > .css-1c345mg').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/9bd9c334.webp?ect=4g')
        cy.get(':nth-child(2) > :nth-child(1) > .usp-title').should('have.text','Pilihan Tiket Terlengkap')
        cy.get(':nth-child(2) > :nth-child(1) > .usp-subtitle').should('have.text','Temukan tiket untuk berbagai jenis kereta api dan destinasi lewat Tokopedia!')

        cy.get(':nth-child(2) > :nth-child(2) > .css-bqlp8e > .css-1c345mg').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/877a1740.webp?ect=4g')
        cy.get(':nth-child(2) > :nth-child(2) > .usp-title').should('have.text','Transaksi Aman')
        cy.get(':nth-child(2) > :nth-child(2) > .usp-subtitle').should('have.text','Transaksi online di Tokopedia dilindungi teknologi SSL & e-tiket akan dikirim langsung ke e-mail.')

        cy.get(':nth-child(2) > :nth-child(3) > .css-bqlp8e > .css-1c345mg').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/1198def4.webp?ect=4g')
        cy.get(':nth-child(2) > :nth-child(3) > .usp-title').should('have.text','Bebas Antre')
        cy.get(':nth-child(2) > :nth-child(3) > .usp-subtitle').should('have.text','Nggak perlu capek antre di stasiun. Kamu bisa beli tiket kereta dari mana saja, kapan pun kamu mau!')

        cy.get(':nth-child(3) > :nth-child(1) > .css-bqlp8e > .css-1c345mg').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/1122cecb.webp?ect=4g')
        cy.get(':nth-child(3) > :nth-child(1) > .usp-title').should('have.text','Beragam Metode Pembayaran')
        cy.get(':nth-child(3) > :nth-child(1) > .usp-subtitle').should('have.text','Lebih mudah pesan tiket lewat Tokopedia karena ada banyak pilihan metode pembayaran.')

        cy.get(':nth-child(3) > :nth-child(2) > .css-bqlp8e > .css-1c345mg').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/1d9c33a4.webp?ect=4g')
        cy.get(':nth-child(3) > :nth-child(2) > .usp-title').should('have.text','Beli Tiket Lebih Awal')
        cy.get(':nth-child(3) > :nth-child(2) > .usp-subtitle').should('have.text','Lewat Tokopedia, kamu bisa beli tiket kereta untuk semua kelas dan tujuan sejak H-90 keberangkatan.')

        cy.get(':nth-child(3) > :nth-child(3) > .css-bqlp8e > .css-1c345mg').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/0f94d861.webp?ect=4g')
        cy.get(':nth-child(3) > :nth-child(3) > .usp-title').should('have.text','Bisa Pilih Kursi')
        cy.get(':nth-child(3) > :nth-child(3) > .usp-subtitle').should('have.text','Punya preferensi tempat duduk? Tinggal pilih kursi yang sesuai dengan keinginanmu!')
    })

    it('Menampilkan gambar metode pembayaran',()=>{
        cy.wait(10000)
        cy.get('.css-4m4lag > .big-title').should('have.text','Metode pembayaran yang bisa kamu pakai')
        cy.get(':nth-child(1) > .css-emvtdw').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/2459ecdf.svg')
        cy.get('.css-5f4mxb').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/4417e8d5.webp')
        cy.get(':nth-child(2) > :nth-child(3) > .css-1o46oru').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/466c94b7.webp')
        cy.get('.css-d4ody7').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/a7879aaa.webp')
        cy.get(':nth-child(5) > .css-q1w5gf').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/28e019ce.jpg')
        cy.get('.css-zi23no').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/f334dd7f.webp')
        cy.get(':nth-child(7) > .css-q1w5gf').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/d5b0f540.webp')
        cy.get('.css-j0r2dl').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/3bb30f71.webp')
        cy.get('.css-nbbqgd').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/9d127033.webp')
        cy.get(':nth-child(2) > .css-1o46oru').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/bb47da2e.webp')
        cy.get(':nth-child(3) > :nth-child(3) > .css-1o46oru').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/ffb9b0f3.webp')
        cy.get(':nth-child(4) > .css-1o46oru').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/53e63b1b.webp')
        cy.get('.css-1s81wrv').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/c0580c27.webp')
        cy.get(':nth-child(6) > .css-1o46oru').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/8c5f1d9e.webp')
        cy.get(':nth-child(7) > .css-1o46oru').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/abf9cf5f.webp')
        cy.get(':nth-child(8) > .css-emvtdw').should('have.attr','src','https://assets.tokopedia.net/assets-tokopedia-lite/v2/pegasus/kratos/ffbe23f6.webp')
    })

    it('Menampilkan section "Pesan Tiket Kereta Api lebih Praktis Bebas Antri!"',()=>{
        cy.get(':nth-child(1) > .par-title').should('have.text','Pesan Tiket Kereta Api lebih Praktis Bebas Antri!')
        cy.get('.css-1r1aq4 > :nth-child(1)').should('be.visible')
    })

    it('Menampilkan section "Rasakan Manfaat Pilih Jadwal Tiket KAI Sesuai dengan Keinginan"',()=>{
        cy.get(':nth-child(2) > .par-title').should('have.text','Rasakan Manfaat Pilih Jadwal Tiket KAI Sesuai dengan Keinginan')
        cy.get('.css-1r1aq4 > :nth-child(2)').should('be.visible')
    })

    it('Menampilkan section "Cek Jadwal Kereta Api dan Dapatkan Harga Tiket Promo Termurah"',()=>{
        cy.get(':nth-child(3) > .par-title').should('have.text','Cek Jadwal Kereta Api dan Dapatkan Harga Tiket Promo Termurah')
        cy.get('.css-1r1aq4 > :nth-child(3)').should('be.visible')
    })

    it('Menampilkan section "Partner Resmi PT KAI Indonesia"',()=>{
        cy.get(':nth-child(4) > .par-title').should('have.text','Partner Resmi PT KAI Indonesia')
        cy.get('.css-1r1aq4 > :nth-child(4)').should('be.visible')
    })

    it('Menampilkan section "Yang sering ditanyakan"',()=>{
        cy.get('.css-f5w2yx > h2').should('be.visible').should('have.text','Yang sering ditanyakan')
        cy.get(':nth-child(2) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Bagaimana-regulasi-perjalanan-kereta-api-pada-masa-Covid-19\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(2) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(3) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Apakah-naik-kereta-api-perlu-tes-RT-PCR-atau-Rapid-Test-Antigen\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(3) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(4) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Kapan-bisa-pesan-tiket-kereta-api\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(4) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(5) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Bagaimana-cara-pesan-tiket-kereta-api-di-Tokopedia\\? > [data-unf="unf-accordion__content-wrapper"] > .faq-content').should('be.visible')
        cy.get(':nth-child(5) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(6) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Apakah-bisa-beli-tiket-kereta-api-secara-mendadak\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(6) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(7) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Apakah-bukti-pembayaran-bisa-digunakan-sebagai-tiket-perjalanan-kereta-api\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(7) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(8) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Kapan-pencetakan-Boarding-Pass-bisa-dilakukan-saat-akan-melakukan-perjalanan\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(8) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(9) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Bagaimana-jika-terdapat-kesalahan-data-diri-pada-saat-pembelian-tiket-kereta-api\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(9) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(10) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Apakah-bisa-membatalkan-tiket-perjalanan-kereta-api-melalui-Tokopedia\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(10) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get(':nth-child(11) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
        cy.get('#content-Apa-itu-Asuransi-KAI-yang-tersedia-dalam-pembelian-tiket-kereta-api-di-Tokopedia\\? > div > .faq-content').should('be.visible')
        cy.get(':nth-child(11) > .css-1uxx7c7-unf-heading > .css-lnt2fi-unf-accordion__header').click()
    })

    it('Menampilkan section "Tiket Kereta Api ke Kota Populer"',()=>{
        cy.get(':nth-child(1) > .link-title').should('have.text','Tiket Kereta Api ke Kota Populer')
        cy.get('[data-testid="TrainHomeSeoSectionDesktop"] > .css-8atqhb > :nth-child(1)').should('be.visible')
    })

    it('Verify url kereta api ke semarang pada section "Tiket Kereta Api ke Kota Populer" benar "',()=>{
        cy.get('[href="/kereta-api/ke/semarang/"]').click()
        cy.url().should('eq', 'https://tiket.tokopedia.com/kereta-api/ke/semarang/')
        cy.get('.css-1wwfynv').should('be.visible')
    })

    it('Menampilkan section "Rute Kereta Api Populer"',()=>{
        cy.get(':nth-child(2) > .link-title').should('have.text','Rute Kereta Api Populer')
    })

    it('Menampilkan section "Kereta Api Populer"',()=>{
        cy.get(':nth-child(3) > .link-title').should('have.text','Kereta Api Populer')
    })

    it('Menampilkan field tanggal pulang ketika klik checkbox pulang',()=>{
        cy.get('.css-1i85qm8-unf-checkbox__area').click()
        cy.get('[data-testid="selectorPulang"]').should('exist')
    })

    // it('Check data list "kota asal" field',()=>{
    //     cy.get('[data-testid="selectorAsal"]').click()
    //     cy.get('.css-1q62ntx').should('have.length', 15)
        
    // })

    it('Search statsiun asal dengan kata kunci yang salah',()=>{
        cy.get('[data-testid="selectorAsal"]').click().type('zz')
        cy.get('.css-1q62ntx > .css-zpv22 > .error-no-results').should('be.visible')
        cy.get('.css-1q62ntx > .css-zpv22 > .error-no-results > .line-one').should('have.text','Nggak ada hasil yang cocok')
        cy.get('.css-1q62ntx > .css-zpv22 > .error-no-results > .line-two').should('have.text','Coba cari ulang pakai kata kunci lain.')
    })

    it('Search statsiun tujuan dengan kata kunci yang salah',()=>{
        cy.get('[data-testid="selectorTujuan"]').click().type('zz')
        cy.get('.css-1q62ntx > .css-zpv22 > .error-no-results').should('be.visible')
        cy.get('.css-1q62ntx > .css-zpv22 > .error-no-results > .line-one').should('have.text','Nggak ada hasil yang cocok')
        cy.get('.css-1q62ntx > .css-zpv22 > .error-no-results > .line-two').should('have.text','Coba cari ulang pakai kata kunci lain.')
    })

    it('Verify tanggal yang telah terlewati tidak bisa di pilih',()=>{
        cy.get('[data-testid="selectorBerangkat"]').click()
        const today = Cypress.moment().format('YYYY-MM-DD')
        cy.get('.css-1q62ntx > :nth-child(2)').each(($date) => {
            const date = $date.text()
            if (Cypress.moment(date).isBefore(today)) {
                cy.wrap($date).should('have.class', 'disabled')
            } else {
                cy.wrap($date).should('not.have.class', 'disabled')
            }
        })
    })

    it('Jumlah penumpang dewasa tidak dapat kurang dari 1',()=>{
        cy.viewport(1280, 720)
        cy.get('[data-testid="selectorJumlah Penumpang"]').click()
        cy.get(':nth-child(1) > .css-1aq53kl-unf-quantity-editor > .css-3a6js2-unf-quantity-editor__input').invoke('val').then((value) => {
            const numericValue = parseFloat(value);
            if (numericValue <= 1) {
                cy.get(':nth-child(1) > .css-1aq53kl-unf-quantity-editor > [aria-label="Kurangi 1"]').should('be.disabled');
            } else {
                cy.get(':nth-child(1) > .css-1aq53kl-unf-quantity-editor > [aria-label="Kurangi 1"]').should('not.be.disabled');
            }
        });
    })

    it('Jumlah penumpang bayi tidak dapat lebih dari jumlah orang dewasa',()=>{
        cy.viewport(1280, 720)
        cy.get('[data-testid="selectorJumlah Penumpang"]').click()
        cy.get(':nth-child(1) > .css-1aq53kl-unf-quantity-editor > [aria-label="Tambah 1"]').click()
        cy.get(':nth-child(2) > .css-1aq53kl-unf-quantity-editor > [aria-label="Tambah 1"]').click().click()
        cy.get('.css-13e2fmr-unf-ticker > .css-tfd7c3 > #unf-ticker__active-item').should('exist').should('have.text','Jumlah bayi tidak boleh melebihi penumpang dewasa.')
        cy.get(':nth-child(1) > .css-1aq53kl-unf-quantity-editor > .css-3a6js2-unf-quantity-editor__input').invoke('val').then((valueDewasa) => {
            cy.get(':nth-child(2) > .css-1aq53kl-unf-quantity-editor > .css-3a6js2-unf-quantity-editor__input').invoke('val').then((valueBayi) => {
                const numericValueDewasa = parseInt(valueDewasa)
                const numericValueBayi = parseInt(valueBayi)
                if (numericValueBayi >= numericValueDewasa) {
                    cy.get(':nth-child(2) > .css-1aq53kl-unf-quantity-editor > [aria-label="Tambah 1"]').should('be.disabled')
                } else {
                    cy.get(':nth-child(2) > .css-1aq53kl-unf-quantity-editor > [aria-label="Tambah 1"]').should('not.be.disabled')
                }
            })
        })
    })

    it('Jumlah penumpang bayi tidak dapat kurang dari 0',()=>{
        cy.viewport(1280, 720)
        cy.get('[data-testid="selectorJumlah Penumpang"]').click()
        cy.get(':nth-child(2) > .css-1aq53kl-unf-quantity-editor > .css-3a6js2-unf-quantity-editor__input').invoke('val').then((value) => {
            const numericValue = parseFloat(value);
            if (numericValue <= 0) {
                cy.get(':nth-child(1) > .css-1aq53kl-unf-quantity-editor > [aria-label="Kurangi 1"]').should('be.disabled');
            } else {
                cy.get(':nth-child(1) > .css-1aq53kl-unf-quantity-editor > [aria-label="Kurangi 1"]').should('not.be.disabled');
            }
        });
    })

    it('Success mencari tiket yang tersedia',()=>{
        cy.viewport(1280, 720)
        cy.get('[data-testid="selectorAsal"]').click()
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"]').click()
        cy.get('[data-testid="selectorTujuan"]').click()
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Cirebon-Cirebon-CN"]').click()
        cy.get('[data-testid="searchTicketButton"]').click()
        cy.get('[data-testid="SearchSummaryDesktop"] > :nth-child(2) > .title').should('be.visible')
    })

    it('Failed mencari tiket karena kota asal dan kota tujuan sama',()=>{
        cy.viewport(1280, 720)
        cy.get('[data-testid="selectorAsal"]').click()
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"]').click()
        cy.get('[data-testid="selectorTujuan"]').click()
        cy.get('.css-1q62ntx > .css-zpv22 > [label="Bandung-Bandung-BD"]').click()
        cy.get('.error-text').should('be.visible').should('have.text','Stasiun keberangkatan dan tujuan tidak boleh sama.')
        cy.get('[data-testid="searchTicketButton"]').should('be.disabled')
    })

    it('Verify mengunjungi sosial media facebook tokopedia',()=>{
        cy.get('[href="https://www.facebook.com/tokopedia"] > img').click()
        cy.url().should('eq', 'https://www.facebook.com/tokopedia')
    })

    it('Verify mengunjungi sosial media instagram tokopedia',()=>{
        cy.get('[href="https://www.instagram.com/tokopedia"] > img').click()
        cy.url().should('eq', 'https://www.instagram.com/tokopedia/')
    })

    it('Verify mengunjungi sosial media twitter tokopedia',()=>{
        cy.get('[href="https://www.facebook.com/tokopedia"] > img').click()
        cy.url().should('eq', 'https://twitter.com/tokopedia')
    })
})