<template>
  <section class="contact">
    <div class="contact-container">
      <h2 class="contact-title" v-html="$t('Contact.title')"></h2>
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-map-marker-alt contact-icon"></i>
          <span class="contact-text" v-html="$t('Contact.adressInformation')"></span>
        </div>
        <div class="contact-item">
          <i class="fas fa-envelope contact-icon"></i>
          <span class="contact-text"><b v-html="$t('Contact.mailInformation')"></b><br>info@firmainformatyczna.com</span>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone contact-icon"></i>
          <span class="contact-text" v-html="$t('Contact.phoneNumber')"></span>
        </div>
      </div>
      <div class="contact-form">
        <h2 class="form-title"><span class="blue" v-html="$t('Contact.formtTitle')"></span></h2>
        <form @submit.prevent="submitForm" novalidate>
          <div class="form-group">
            <span v-if="subjectError" class="error-message" v-html="$t('Contact.error-message')"></span>
            <input type="text" v-model="subject" :class="{ 'form-input': true, 'error': subjectError }"
              :placeholder="$t('Contact.inputTitlePlaceHolder')">
          </div>

          <div class="form-group">
            <span v-if="messageError" class="error-message" v-html="$t('Contact.error-message')"></span>
            <textarea v-model="message" :class="{ 'form-textarea': true, 'error': messageError }"
              :placeholder="$t('Contact.inputMessagePlaceHolder')"></textarea>
          </div>
          <button type="submit" class="form-button" v-html="$t('Contact.buttonText')"></button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      subject: '',
      message: '',
      subjectError: false,
      messageError: false
    };
  },
  methods: {
    submitForm() {
      this.subjectError = false;
      this.messageError = false;

      if (this.subject === '') {
        this.subjectError = true;
      }

      if (this.message === '') {
        this.messageError = true;
      }

      if (!this.subjectError && !this.messageError) {
        const mailtoLink = `mailto:info@firmainformatyczna.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
        window.location.href = mailtoLink;
        this.clearForm();
      }
    },
    clearForm() {
      this.subject = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 20px;
  margin-bottom: 150px;
  margin-top: 20px;
}

:deep(.blue) {
  color: #132e6c;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
}

:deep(.contact-title) {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}

:deep(.contact-info) {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
  left: 50%;
  position: relative;
  transform: translate(-50%);
}

.contact-icon {
  color: #333;
  margin-right: 10px;
}

.contact-info {
  flex-direction: column;
  align-items: center;
}

.contact-item {
  margin: 10px 0;
  text-align: center;
}

:deep(.form-title) {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

:deep(.form-input),
:deep(.form-textarea) {
  width: 100%;
  padding: 10px;
  border: 2px solid #132e6c;
  border-radius: 5px;
  font-size: 14px;
}

.error {
  border: 2px solid red;
}

:deep(.error-message) {
  color: red;
  font-size: 12px;
}

.form-textarea {
  min-height: 120px;
  resize: none;
}

:deep(.form-button) {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #132e6c;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0b1c42;
}
</style>